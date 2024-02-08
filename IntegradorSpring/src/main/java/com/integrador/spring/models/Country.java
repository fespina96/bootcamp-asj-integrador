package com.integrador.spring.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="countries")
public class Country {
	@Id
	private Integer id;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy="country")
	private List<State> listStates = new ArrayList<>();
	

	public Country() {
		
	}
	
	public Country(Integer id, String name) {
		this.id = id;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<State> getListStates() {
		return listStates;
	}

}
