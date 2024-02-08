package com.integrador.spring.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Date emisionDate;
	private Date estimatedDeliveryDate;
	private Date deliveryDate;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Supplier supplier;
	
	private String address;
	private Double total;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private OrderState orderState;
	
	@OneToMany(mappedBy="order")
	private List<ProductsPerOrder> listProducts = new ArrayList<>();
	
	@Column(columnDefinition="date default CURRENT_TIMESTAMP()")
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;
	
	public Order() {
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public Order(Date emisionDate, Date estimatedDeliveryDate, Date deliveryDate, Supplier supplier, String address,
			Double total, OrderState orderState) {
		super();
		this.emisionDate = emisionDate;
		this.estimatedDeliveryDate = estimatedDeliveryDate;
		this.deliveryDate = deliveryDate;
		this.supplier = supplier;
		this.address = address;
		this.total = total;
		this.orderState = orderState;
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public Date getEmisionDate() {
		return emisionDate;
	}

	public void setEmisionDate(Date emisionDate) {
		this.emisionDate = emisionDate;
	}

	public Date getEstimatedDeliveryDate() {
		return estimatedDeliveryDate;
	}

	public void setEstimatedDeliveryDate(Date estimatedDeliveryDate) {
		this.estimatedDeliveryDate = estimatedDeliveryDate;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public OrderState getOrderState() {
		return orderState;
	}

	public void setOrderState(OrderState orderState) {
		this.orderState = orderState;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public Integer getId() {
		return id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public List<ProductsPerOrder> getListProducts() {
		return listProducts;
	}

	public void setListProducts(List<ProductsPerOrder> listProducts) {
		this.listProducts = listProducts;
	}
	
	
	
	
}
