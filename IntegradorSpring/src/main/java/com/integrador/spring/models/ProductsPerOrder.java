package com.integrador.spring.models;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class ProductsPerOrder {
	@EmbeddedId
	ProductsPerOrderKey id;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@MapsId("productId")
	@JoinColumn(name="product_id")
	Product product;
	
	@JsonIncludeProperties({"id"})
	@ManyToOne
	@MapsId("orderId")
	@JoinColumn(name="order_id")
	Order order;
	
	Integer quantity;
	
	public ProductsPerOrder() {
		
	}

	public ProductsPerOrder(Product product, Order order, Integer quantity) {
		super();
		this.product = product;
		this.order = order;
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public ProductsPerOrderKey getId() {
		return id;
	}
	
	
}
