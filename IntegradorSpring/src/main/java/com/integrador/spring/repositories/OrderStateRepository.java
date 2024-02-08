package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.OrderState;

public interface OrderStateRepository extends JpaRepository<OrderState, Integer> {

}
