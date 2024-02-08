package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Order;
import com.integrador.spring.models.OrderState;
import com.integrador.spring.repositories.OrderRepository;
import com.integrador.spring.repositories.OrderStateRepository;

@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderStateRepository orderStateRepository;
	
	public List<Order> getOrders(){
		return orderRepository.findByDeletedAtIsNull();
	}
	
	public List<Order> getDeleted(){
		return orderRepository.findByDeletedAtNotNull();
	}
	
	public Order getOrderById(int id) {
		Order  o= null;
		for(Order order:orderRepository.findAll()) {
			if(order.getId()==id) {
				o=order;
			}
		}
		return o;
	}
	
	public String addOrder(Order order) {
		Order orderInput = new Order();
		if(order!=null) {
			orderInput.setAddress(order.getAddress());
			orderInput.setDeliveryDate(order.getDeliveryDate());
			orderInput.setEmisionDate(order.getEmisionDate());
			orderInput.setEstimatedDeliveryDate(order.getEstimatedDeliveryDate());
			orderInput.setOrderState(order.getOrderState());
			orderInput.setSupplier(order.getSupplier());
			orderInput.setTotal(order.getTotal());
			orderRepository.save(orderInput);
			return "Orden agregada correctamente";
		}else {
			return "Error al agregar orden";
		}
	}
	
	public String editOrder(Integer id,Order order) {
		Order orderInput = orderRepository.findById(id).get();
		if(orderInput!=null) {
			orderInput.setAddress(order.getAddress());
			orderInput.setDeliveryDate(order.getDeliveryDate());
			orderInput.setEmisionDate(order.getEmisionDate());
			orderInput.setEstimatedDeliveryDate(order.getEstimatedDeliveryDate());
			orderInput.setOrderState(order.getOrderState());
			orderInput.setSupplier(order.getSupplier());
			orderInput.setTotal(order.getTotal());
			orderInput.setUpdatedAt(new Date(System.currentTimeMillis()));
			orderRepository.save(orderInput);
			return "Orden editada correctamente";
		}else {
			return "Error al editar orden";
		}
	}
	
	public String deleteOrderById(Integer id) {
		Order o = orderRepository.findById(id).get();
		if(o!=null) {
			o.setOrderState(orderStateRepository.findById(4).get());
			o.setDeletedAt(new Date(System.currentTimeMillis()));
			orderRepository.save(o);
			return "Orden #"+id+" cancelada correctamente";
		}
		return "Error al borrar orden.";
	}
	
	public String undoDeleteOrderById(Integer id) {
		Order o = orderRepository.findById(id).get();
		if(o!=null) {
			o.setOrderState(orderStateRepository.findById(1).get());
			o.setDeletedAt(null);
			orderRepository.save(o);
			return "Orden #"+id+" restaurada correctamente";
		}
		return "Error al restaurar orden.";
	}
	
	public Integer getLastOrderId() {
		return orderRepository.findFirstByOrderByIdDesc().getId();
	}
	
	public String orderDelivered(Integer id,OrderState orderState) {
		Order o = orderRepository.findById(id).get();
		if(o!=null) {
			o.setDeliveryDate(new Date(System.currentTimeMillis()));
			o.setUpdatedAt(new Date(System.currentTimeMillis()));
			o.setOrderState(orderState);
			orderRepository.save(o);
			return "Orden #"+id+" actualizada correctamente";
		}
		return "Error al borrar orden.";
	}
	
	public List<Order> getOrdersByOrderStateId(int id){
		return orderRepository.findByOrderStateId(id);
	}
}
