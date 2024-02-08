package com.integrador.spring.models;

public class SupplierFilterOptions {
	String code,name;

	public SupplierFilterOptions() {
		
	}
	
	public SupplierFilterOptions(String code, String name) {
		super();
		this.code = code;
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
