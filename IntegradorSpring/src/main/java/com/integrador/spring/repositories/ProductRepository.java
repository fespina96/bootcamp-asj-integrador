package com.integrador.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.integrador.spring.models.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	List<Product> findBySupplierId(int id);
	List<Product> findByDeletedAtIsNullOrderByNameAsc();
	List<Product> findByDeletedAtNotNull();
	
	@Query("SELECT p FROM Product p JOIN p.productCategory pc WHERE UPPER(p.description) LIKE UPPER(CONCAT('%', :desc, '%')) AND UPPER(p.name) LIKE UPPER(CONCAT('%', :name, '%')) AND UPPER(pc.name) LIKE UPPER(CONCAT('%', :category, '%')) AND p.deletedAt IS NULL")
	List<Product> filterOptions(@Param("name") String name, @Param("desc") String desc, @Param("category") String category);
	
	@Query("SELECT p FROM Product p JOIN p.productCategory pc WHERE UPPER(p.description) LIKE UPPER(CONCAT('%', :desc, '%')) AND UPPER(p.name) LIKE UPPER(CONCAT('%', :name, '%')) AND UPPER(pc.name) LIKE UPPER(CONCAT('%', :category, '%')) AND p.deletedAt IS NOT NULL")
	List<Product> filterOptionsDeleted(@Param("name") String name, @Param("desc") String desc, @Param("category") String category);
}
