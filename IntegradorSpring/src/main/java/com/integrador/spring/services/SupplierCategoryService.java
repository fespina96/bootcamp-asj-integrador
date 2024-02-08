package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.SupplierCategory;
import com.integrador.spring.repositories.SupplierCategoryRepository;

@Service
public class SupplierCategoryService {
	@Autowired
	SupplierCategoryRepository supplierCategoryRepository;
	
	public List<SupplierCategory> getSupplierCategories(){
		return supplierCategoryRepository.findByDeletedAtIsNull();
	}
	
	public List<SupplierCategory> getDeleted(){
		return supplierCategoryRepository.findByDeletedAtNotNull();
	}
	
	public SupplierCategory getSupplierCategoryById(int id) {
		SupplierCategory  sc= null;
		for(SupplierCategory supplierCategory:supplierCategoryRepository.findAll()) {
			if(supplierCategory.getId()==id) {
				sc=supplierCategory;
			}
		}
		return sc;
	}
	
	public String addSupplierCategory(SupplierCategory supplierCategory) {
		SupplierCategory sc = new SupplierCategory();
		if(supplierCategory!=null) {
			sc.setName(supplierCategory.getName());
			supplierCategoryRepository.save(sc);
			return "Categoría de producto agregada correctamente";
		}else {
			return "Error";
		}
		
	}
	
	public String editSupplierCategory(Integer id,SupplierCategory supplierCategory) {
		SupplierCategory sc = supplierCategoryRepository.findById(id).get();
		if(sc!=null) {
			sc.setName(supplierCategory.getName());
			supplierCategoryRepository.save(sc);
			return "Categoria #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
	public String deleteSupplierCategoryById(Integer id) {
		SupplierCategory sc = supplierCategoryRepository.findById(id).get();
		if(sc!=null) {
			sc.setDeletedAt(new Date(System.currentTimeMillis()));
			supplierCategoryRepository.save(sc);
			return "Categoria #"+id+" eliminada correctamente";
		}
		return "Error";
	}
	
	public String undoDeleteSupplierCategoryById(Integer id) {
		SupplierCategory sc = supplierCategoryRepository.findById(id).get();
		if(sc!=null) {
			sc.setDeletedAt(null);
			supplierCategoryRepository.save(sc);
			return "Categoria #"+id+" restaurada correctamente";
		}
		return "Error";
	}
}
