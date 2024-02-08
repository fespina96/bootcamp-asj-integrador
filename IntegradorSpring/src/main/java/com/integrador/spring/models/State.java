package com.integrador.spring.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="states")
public class State {
	@Id
	private Integer id;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Country country;
	
	@JsonIgnore
	@OneToMany(mappedBy="state")
	private List<Supplier> listSuppliers = new ArrayList<>();
	
	private String name;

	public State() {
		
	}

	public Integer getId() {
		return id;
	}

	public Country getCountry() {
		return country;
	}

	public String getName() {
		return name;
	}
	
	
	
	
}
