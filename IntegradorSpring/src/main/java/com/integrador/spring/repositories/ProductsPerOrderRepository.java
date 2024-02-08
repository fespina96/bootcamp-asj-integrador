package com.integrador.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.ProductsPerOrder;

public interface ProductsPerOrderRepository extends JpaRepository<ProductsPerOrder, Integer> {
	List<ProductsPerOrder> findByOrderId(int id);
}
