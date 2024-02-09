package com.integrador.spring.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	String email,password;
	
	@Temporal(TemporalType.DATE)
	private Date createdAt;
	@Temporal(TemporalType.DATE)
	private Date updatedAt;
	@Temporal(TemporalType.DATE)
	private Date deletedAt;
	
	public User() {
		this.createdAt = new Date(System.currentTimeMillis());
	}
	
	public User(String email, String password) {
		this.email = email;
		this.password = password;
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
	
	
}
