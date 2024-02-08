package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.ProductFilterOptions;
import com.integrador.spring.models.Product;
import com.integrador.spring.services.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> getProducts(){
		return ResponseEntity.ok(productService.getProducts());
	}
	
	@GetMapping("/deleted")
	public ResponseEntity<List<Product>> getDeletedProducts(){
		return ResponseEntity.ok(productService.getDeleted());
	}
	
	@PostMapping("/filtered")
	public ResponseEntity<List<Product>> getFilteredProducts(@RequestBody ProductFilterOptions filterOptions){
		return ResponseEntity.ok(productService.filterProducts(filterOptions.getName(), filterOptions.getDesc(), filterOptions.getCategory()));
	}
	
	@PostMapping("/filtered/deleted")
	public ResponseEntity<List<Product>> getFilteredDeletedProducts(@RequestBody ProductFilterOptions filterOptions){
		return ResponseEntity.ok(productService.filterDeletedProducts(filterOptions.getName(), filterOptions.getDesc(), filterOptions.getCategory()));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id){
		return ResponseEntity.ok(productService.getProductById(id));
	}
	
	@GetMapping("/supplier/{id}")
	public ResponseEntity<List<Product>> getProductBySupplierId(@PathVariable int id){
		return ResponseEntity.ok(productService.getProductsBySupplierId(id));
	}
	
	@PostMapping
	public ResponseEntity<String> addProduct(@RequestBody Product product){
		return ResponseEntity.ok(productService.addProduct(product));	
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editProduct(@PathVariable int id,@RequestBody Product product){
		return ResponseEntity.ok(productService.editProduct(id,product));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id){
		return ResponseEntity.ok(productService.deleteProductById(id));
	}
	
	@DeleteMapping("/undo/{id}")
	public ResponseEntity<String> undoDeleteProduct(@PathVariable int id){
		return ResponseEntity.ok(productService.undoDeleteProductById(id));
	}
}
