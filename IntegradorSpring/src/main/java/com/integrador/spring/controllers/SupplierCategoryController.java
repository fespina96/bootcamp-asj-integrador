package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.SupplierCategory;
import com.integrador.spring.services.SupplierCategoryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/supplier-category")
public class SupplierCategoryController {
	@Autowired
	SupplierCategoryService supplierCategoryService;
	
	@GetMapping
	public ResponseEntity<List<SupplierCategory>> getSupplierCategories(){
		return ResponseEntity.ok(supplierCategoryService.getSupplierCategories());
	}
	
	@PostMapping
	public ResponseEntity<String> addSupplierCategory(@RequestBody SupplierCategory sc){
		return ResponseEntity.ok(supplierCategoryService.addSupplierCategory(sc));
	}
	
	@GetMapping("/deleted")
	public ResponseEntity<List<SupplierCategory>> getDeletedSupplierCategories(){
		return ResponseEntity.ok(supplierCategoryService.getDeleted());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<SupplierCategory> getSupplierCategoryById(@PathVariable int id){
		return ResponseEntity.ok(supplierCategoryService.getSupplierCategoryById(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteSupplierCategoryById(@PathVariable int id){
		return ResponseEntity.ok(supplierCategoryService.deleteSupplierCategoryById(id));
	}
	
	@DeleteMapping("/undo/{id}")
	public ResponseEntity<String> undoDeleteSupplierCategoryById(@PathVariable int id){
		return ResponseEntity.ok(supplierCategoryService.undoDeleteSupplierCategoryById(id));
	}
}
