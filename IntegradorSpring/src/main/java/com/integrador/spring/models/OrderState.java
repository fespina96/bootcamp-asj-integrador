package com.integrador.spring.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="order_states")
public class OrderState {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy="orderState")
	private List<Order> listOrders;

	public OrderState() {
		
	}

	public OrderState(String name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<Order> getListOrders() {
		return listOrders;
	}
	
	
}
