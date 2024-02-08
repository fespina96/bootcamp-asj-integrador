package com.integrador.spring.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="supplier_categories")
public class SupplierCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy="supplierCategory")
	private List<Supplier> listSuppliers = new ArrayList<>();
	
	@Column(columnDefinition="date default CURRENT_TIMESTAMP()")
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;

	public SupplierCategory() {
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public SupplierCategory(String name) {
		this.name = name;
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
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

	public Date getCreatedAt() {
		return createdAt;
	}

	public List<Supplier> getListSuppliers() {
		return listSuppliers;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
