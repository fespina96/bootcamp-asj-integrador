package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Product;
import com.integrador.spring.models.Supplier;
import com.integrador.spring.repositories.SupplierRepository;

@Service
public class SupplierService {
	@Autowired
	SupplierRepository supplierRepository;
	
	public List<Supplier> getSuppliers(){
		return supplierRepository.findByDeletedAtIsNull();
	}
	
	public List<Supplier> getDeleted(){
		return supplierRepository.findByDeletedAtNotNull();
	}
	
	public Supplier getSupplierById(int id) {
		Supplier  s= null;
		for(Supplier supplier:supplierRepository.findAll()) {
			if(supplier.getId()==id) {
				s=supplier;
			}
		}
		return s;
	}
	
	public List<Product> getSupplierProductsById(int id){
		return supplierRepository.findById(id).get().getListProducts();
	}
	
	public String addSupplier(Supplier supplier) {
		Supplier supplierInput = new Supplier();
		if(supplier!=null) {
			supplierInput.setAddress(supplier.getAddress());
			supplierInput.setCode(supplier.getCode());
			supplierInput.setCondition(supplier.getCondition());
			supplierInput.setContactEmail(supplier.getContactEmail());
			supplierInput.setContactName(supplier.getContactName());
			supplierInput.setContactPhone(supplier.getContactPhone());
			supplierInput.setContactRole(supplier.getContactRole());
			supplierInput.setContactSurname(supplier.getContactSurname());
			supplierInput.setCountry(supplier.getCountry());
			supplierInput.setCuit(supplier.getCuit());
			supplierInput.setEmail(supplier.getEmail());
			supplierInput.setLogoImageUrl(supplier.getLogoImageUrl());
			supplierInput.setName(supplier.getName());
			supplierInput.setPhone(supplier.getPhone());
			supplierInput.setState(supplier.getState());
			supplierInput.setSupplierCategory(supplier.getSupplierCategory());
			supplierInput.setWebsite(supplier.getWebsite());
			supplierInput.setZipCode(supplier.getZipCode());
			supplierInput.setDistrict(supplier.getDistrict());
			supplierRepository.save(supplierInput);
			return "Proveedor agregado correctamente";
		}else {
			return "Error al agregar proveedor";
		}
	}
	
	public String editSupplier(Integer id,Supplier supplier) {
		Supplier supplierInput = supplierRepository.findById(id).get();
		if(supplier!=null) {
			supplierInput.setAddress(supplier.getAddress());
			supplierInput.setCode(supplier.getCode());
			supplierInput.setCondition(supplier.getCondition());
			supplierInput.setContactEmail(supplier.getContactEmail());
			supplierInput.setContactName(supplier.getContactName());
			supplierInput.setContactPhone(supplier.getContactPhone());
			supplierInput.setContactRole(supplier.getContactRole());
			supplierInput.setContactSurname(supplier.getContactSurname());
			supplierInput.setCountry(supplier.getCountry());
			supplierInput.setCuit(supplier.getCuit());
			supplierInput.setEmail(supplier.getEmail());
			supplierInput.setLogoImageUrl(supplier.getLogoImageUrl());
			supplierInput.setName(supplier.getName());
			supplierInput.setPhone(supplier.getPhone());
			supplierInput.setState(supplier.getState());
			supplierInput.setSupplierCategory(supplier.getSupplierCategory());
			supplierInput.setWebsite(supplier.getWebsite());
			supplierInput.setZipCode(supplier.getZipCode());
			supplierInput.setUpdatedAt(new Date(System.currentTimeMillis()));
			supplierInput.setDistrict(supplier.getDistrict());
			supplierRepository.save(supplierInput);
			return "Proveedor editado correctamente";
		}else {
			return "Error al editar proveedor";
		}
	}
	
	public String deleteSupplierById(Integer id) {
		Supplier s = supplierRepository.findById(id).get();
		if(s!=null) {
			s.setDeletedAt(new Date(System.currentTimeMillis()));
			supplierRepository.save(s);
			return "Proveedor #"+id+" eliminada correctamente";
		}
		return "Error al borrar proveedor.";
	}
	
	public String undoDeleteSupplierById(Integer id) {
		Supplier s = supplierRepository.findById(id).get();
		if(s!=null) {
			s.setDeletedAt(null);
			supplierRepository.save(s);
			return "Proveedor #"+id+" restaurado correctamente";
		}
		return "Error al borrar proveedor.";
	}
	
	public List<Supplier> filterSuppliers(String code, String name){
		return supplierRepository.filterOptions(code, name);
	}
	
	public List<Supplier> filterDeletedSuppliers(String code, String name){
		return supplierRepository.filterDeletedOptions(code, name);
	}
}
