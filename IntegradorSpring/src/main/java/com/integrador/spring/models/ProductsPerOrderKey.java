package com.integrador.spring.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@SuppressWarnings("serial")
@Embeddable
public class ProductsPerOrderKey implements Serializable {
	@Column
	Integer productId;
	
	@Column
	Integer orderId;

	public ProductsPerOrderKey() {
		
	}
	
	public ProductsPerOrderKey(Integer productId, Integer orderId) {
		super();
		this.productId = productId;
		this.orderId = orderId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	
	
}
