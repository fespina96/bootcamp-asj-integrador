package com.integrador.spring.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="product_categories")
public class ProductCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	private String description;
	
	@Column(columnDefinition="date default CURRENT_TIMESTAMP()")
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;
	
	@OneToMany(mappedBy="productCategory")
	private List<Product> listProducts = new ArrayList<>();

	public ProductCategory() {
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public ProductCategory(String name, String description) {
		this.name = name;
		this.description = description;
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public List<Product> getListProducts() {
		return listProducts;
	}

	public void setListProducts(List<Product> listProducts) {
		this.listProducts = listProducts;
	}

	public Integer getId() {
		return id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	
}
