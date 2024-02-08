package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.ProductCategory;
import com.integrador.spring.repositories.ProductCategoryRepository;

@Service
public class ProductCategoryService {
	@Autowired
	ProductCategoryRepository productCategoryRepository;
	
	public List<ProductCategory> getProductCategories(){
		return productCategoryRepository.findByDeletedAtIsNull();
	}
	
	public List<ProductCategory> getDeleted(){
		return productCategoryRepository.findByDeletedAtNotNull();
	}
	
	public ProductCategory getProductCategoryById(int id) {
		ProductCategory  pc= null;
		for(ProductCategory productCategory:productCategoryRepository.findAll()) {
			if(productCategory.getId()==id) {
				pc=productCategory;
			}
		}
		return pc;
	}
	
	public String addProductCategory(ProductCategory productCategory) {
		ProductCategory pc = new ProductCategory();
		if(productCategory!=null) {
			pc.setName(productCategory.getName());
			pc.setDescription(productCategory.getDescription());
			productCategoryRepository.save(pc);
			return "Categoría de producto agregada correctamente";
		}
		return "Error";
		
	}
	
	public String editProductCategory(Integer id,ProductCategory productCategory) {
		ProductCategory pc = productCategoryRepository.findById(id).get();
		if(pc!=null) {
			pc.setName(productCategory.getName());
			productCategoryRepository.save(pc);
			return "Categoria #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
	public String deleteProductCategoryById(Integer id) {
		ProductCategory pc = productCategoryRepository.findById(id).get();
		if(pc!=null) {
			pc.setDeletedAt(new Date(System.currentTimeMillis()));
			productCategoryRepository.save(pc);
			return "Categoria #"+id+" eliminada correctamente";
		}
		return "Error";
	}
	
	public String undoDeleteProductCategoryById(Integer id) {
		ProductCategory pc = productCategoryRepository.findById(id).get();
		if(pc!=null) {
			pc.setDeletedAt(null);
			productCategoryRepository.save(pc);
			return "Categoria #"+id+" restaurada correctamente";
		}
		return "Error";
	}
}
