package com.integrador.spring.models;

public class ProductFilterOptions {
	String name ="";
	String desc ="";
	String category = "";
	
	public ProductFilterOptions() {
		
	}
	
	public ProductFilterOptions(String name, String desc, String category) {
		this.name = name;
		this.desc = desc;
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	
}
