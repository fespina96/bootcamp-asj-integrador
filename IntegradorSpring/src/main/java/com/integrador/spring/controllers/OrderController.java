package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.Order;
import com.integrador.spring.models.OrderState;
import com.integrador.spring.services.OrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping
	public ResponseEntity<List<Order>> getOrders(){
		return ResponseEntity.ok(orderService.getOrders());
	}
	
	@GetMapping("/deleted")
	public ResponseEntity<List<Order>> getDeletedOrders(){
		return ResponseEntity.ok(orderService.getDeleted());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable int id){
		return ResponseEntity.ok(orderService.getOrderById(id));
	}
	
	@GetMapping("/order-state/{id}")
	public ResponseEntity<List<Order>> getOrderByOrderStateId(@PathVariable int id){
		return ResponseEntity.ok(orderService.getOrdersByOrderStateId(id));
	}
	
	@PostMapping
	public ResponseEntity<String> addOrder(@RequestBody Order order) {
		return ResponseEntity.ok(orderService.addOrder(order));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteOrder(@PathVariable int id){
		return ResponseEntity.ok(orderService.deleteOrderById(id));
	}
	
	@DeleteMapping("/undo/{id}")
	public ResponseEntity<String> undoDeleteOrder(@PathVariable int id){
		return ResponseEntity.ok(orderService.undoDeleteOrderById(id));
	}

	@GetMapping("/lastOrderId")
	public ResponseEntity<Integer> getLastOrderId(){
		return ResponseEntity.ok(orderService.getLastOrderId());
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<String> orderDelivered(@PathVariable int id,@RequestBody OrderState orderState){
		return ResponseEntity.ok(orderService.orderDelivered(id,orderState));
	}
}
