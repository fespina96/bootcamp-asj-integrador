package com.integrador.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.OrderState;
import com.integrador.spring.repositories.OrderStateRepository;

@Service
public class OrderStateService {
	@Autowired
	OrderStateRepository orderStateRepository;
	
	public List<OrderState> getOrderStates(){
		return orderStateRepository.findAll();
	}
	
	public OrderState getOrderStateById(int id) {
		OrderState  o= null;
		for(OrderState orderState:orderStateRepository.findAll()) {
			if(orderState.getId()==id) {
				o=orderState;
			}
		}
		return o;
	}
}
