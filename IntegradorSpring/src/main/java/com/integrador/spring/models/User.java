package com.integrador.spring.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	String email,password;
	
	public User() {
		
	}
	
	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	
}
