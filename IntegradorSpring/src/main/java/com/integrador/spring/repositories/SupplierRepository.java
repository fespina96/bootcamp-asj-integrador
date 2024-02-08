package com.integrador.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.integrador.spring.models.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer> {
	 List<Supplier> findByDeletedAtIsNull();
	 List<Supplier> findByDeletedAtNotNull();
	 
	 @Query("SELECT s FROM Supplier s WHERE UPPER(s.code) LIKE UPPER(CONCAT('%',:code,'%')) AND UPPER(s.name) LIKE UPPER(CONCAT('%',:name,'%')) AND s.deletedAt IS NULL")
	 List<Supplier> filterOptions(@Param("code")String code,@Param("name") String name);
	 
	 @Query("SELECT s FROM Supplier s WHERE UPPER(s.code) LIKE UPPER(CONCAT('%',:code,'%')) AND UPPER(s.name) LIKE UPPER(CONCAT('%',:name,'%')) AND s.deletedAt IS NOT NULL")
	 List<Supplier> filterDeletedOptions(@Param("code")String code,@Param("name") String name);
}
