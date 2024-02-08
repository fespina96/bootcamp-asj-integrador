package com.integrador.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {
	List<ProductCategory> findByDeletedAtIsNull();
	List<ProductCategory> findByDeletedAtNotNull();
}
