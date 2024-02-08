package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Product;
import com.integrador.spring.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getProducts(){
		return productRepository.findByDeletedAtIsNullOrderByNameAsc();
	}
	
	public List<Product> getDeleted(){
		return productRepository.findByDeletedAtNotNull();
	}
	
	public Product getProductById(int id) {
		Product  p= null;
		for(Product product:productRepository.findAll()) {
			if(product.getId()==id) {
				p=product;
			}
		}
		return p;
	}
	
	public List<Product> getProductsBySupplierId(int id){
		return productRepository.findBySupplierId(id);
	}
	
	public String addProduct(Product product) {
		Product p = new Product();
		if(product!=null) {
			p.setDescription(product.getDescription());
			p.setImageUrl(product.getImageUrl());
			p.setName(product.getName());
			p.setPrice(product.getPrice());
			p.setProductCategory(product.getProductCategory());
			p.setSkuCode(product.getSkuCode());
			p.setSupplier(product.getSupplier());
			productRepository.save(p);
			return "Producto agregado correctamente";
		}
		return "Error";
		
	}
	
	public String editProduct(Integer id,Product product) {
		Product p = productRepository.findById(id).get();
		if(p!=null) {
			p.setDescription(product.getDescription());
			p.setImageUrl(product.getImageUrl());
			p.setName(product.getName());
			p.setPrice(product.getPrice());
			p.setProductCategory(product.getProductCategory());
			p.setSkuCode(product.getSkuCode());
			p.setSupplier(product.getSupplier());
			p.setUpdatedAt(new Date(System.currentTimeMillis()));
			productRepository.save(p);
			return "Producto #"+id+" modificado correctamente";
		}
		return "Error";
	}
	
	public String deleteProductById(Integer id) {
		Product p = productRepository.findById(id).get();
		if(p!=null) {
			p.setDeletedAt(new Date(System.currentTimeMillis()));
			productRepository.save(p);
			return "Producto #"+id+" eliminado correctamente";
		}
		return "Error";
	}
	
	public String undoDeleteProductById(Integer id) {
		Product p = productRepository.findById(id).get();
		if(p!=null) {
			p.setDeletedAt(null);
			productRepository.save(p);
			return "Producto #"+id+" restaurado correctamente";
		}
		return "Error";
	}
	
	public List<Product> filterProducts(String name, String desc, String category){
		return productRepository.filterOptions(name, desc, category);
	}
	
	public List<Product> filterDeletedProducts(String name, String desc, String category){
		return productRepository.filterOptions(name, desc, category);
	}
	
}
