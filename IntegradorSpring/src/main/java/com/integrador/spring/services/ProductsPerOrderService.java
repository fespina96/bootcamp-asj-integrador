package com.integrador.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.ProductsPerOrder;
import com.integrador.spring.repositories.ProductsPerOrderRepository;

@Service
public class ProductsPerOrderService {
	@Autowired
	ProductsPerOrderRepository productsPerOrderRepository;
	
	public List<ProductsPerOrder> getProductsPerOrders(){
		return productsPerOrderRepository.findAll();
	}
	
	public List<ProductsPerOrder> getProductsPerOrderById(int id) {
		return productsPerOrderRepository.findByOrderId(id);
	}
	
	public String addProductsPerOrder(ProductsPerOrder ppo) {
		if(ppo!=null) {
			productsPerOrderRepository.save(ppo);
			return "Productos de la orden agregados";
		}
		return "Error";
	}
}
