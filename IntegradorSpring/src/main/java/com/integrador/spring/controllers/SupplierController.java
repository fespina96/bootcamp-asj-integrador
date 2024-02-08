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

import com.integrador.spring.models.Product;
import com.integrador.spring.models.Supplier;
import com.integrador.spring.models.SupplierFilterOptions;
import com.integrador.spring.services.SupplierService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/supplier")
public class SupplierController {
	@Autowired
	SupplierService supplierService;
	
	@GetMapping
	public ResponseEntity<List<Supplier>> getSuppliers(){
		return ResponseEntity.ok(supplierService.getSuppliers());
	}
	
	@GetMapping("/deleted")
	public ResponseEntity<List<Supplier>> getDeletedSuppliers(){
		return ResponseEntity.ok(supplierService.getDeleted());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Supplier> getSupplierById(@PathVariable int id){
		return ResponseEntity.ok(supplierService.getSupplierById(id));
	}
	
	@GetMapping("/{id}/products")
	public ResponseEntity<List<Product>> getSupplierProductsById(@PathVariable int id){
		return ResponseEntity.ok(supplierService.getSupplierProductsById(id));
	}
	
	@PostMapping()
	public ResponseEntity<String> addSupplier(@RequestBody Supplier supplier) {
		return ResponseEntity.ok(supplierService.addSupplier(supplier));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editSupplier(@PathVariable int id,@RequestBody Supplier supplier){
		return ResponseEntity.ok(supplierService.editSupplier(id,supplier));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteSupplier(@PathVariable int id){
		return ResponseEntity.ok(supplierService.deleteSupplierById(id));
	}
	
	@DeleteMapping("/undo/{id}")
	public ResponseEntity<String> undoDeleteSupplier(@PathVariable int id){
		return ResponseEntity.ok(supplierService.undoDeleteSupplierById(id));
	}
	
	@PostMapping("filtered")
	public ResponseEntity<List<Supplier>> filterSuppliers(@RequestBody SupplierFilterOptions sfo){
		return ResponseEntity.ok(supplierService.filterSuppliers(sfo.getCode(), sfo.getName()));
	}
	
	@PostMapping("filtered/deleted")
	public ResponseEntity<List<Supplier>> filterDeletedSuppliers(@RequestBody SupplierFilterOptions sfo){
		return ResponseEntity.ok(supplierService.filterDeletedSuppliers(sfo.getCode(), sfo.getName()));
	}
}
