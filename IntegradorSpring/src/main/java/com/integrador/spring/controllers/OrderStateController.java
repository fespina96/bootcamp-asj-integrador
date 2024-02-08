package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.OrderState;
import com.integrador.spring.services.OrderStateService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order-state")
public class OrderStateController {
	@Autowired
	OrderStateService OrderStateService;
	
	@GetMapping
	public ResponseEntity<List<OrderState>> getOrderStates(){
		return ResponseEntity.ok(OrderStateService.getOrderStates());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<OrderState> getOrderStateById(@PathVariable int id){
		return ResponseEntity.ok(OrderStateService.getOrderStateById(id));
	}
}
