package com.integrador.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	Order findFirstByOrderByIdDesc();
	List<Order> findByOrderStateId(int id);
	List<Order> findByDeletedAtIsNull();
	List<Order> findByDeletedAtNotNull();
}
