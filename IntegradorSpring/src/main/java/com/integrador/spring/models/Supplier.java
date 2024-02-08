package com.integrador.spring.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name="suppliers")
public class Supplier {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique=true)
	private String code;
	private String name;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private SupplierCategory supplierCategory;
	
	private String logoImageUrl;
	private String website;
	private String email;
	private String phone;
	private String address;
	private String district;
	private String zipCode;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private State state;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Country country;
	
	private String cuit;
	
	@JsonIncludeProperties({"id","name"})
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Condition condition;
	
	private String contactName;
	private String contactSurname;
	private String contactPhone;
	private String contactEmail;
	private String contactRole;
	
	@Column(columnDefinition="date default CURRENT_TIMESTAMP()")
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;

	@OneToMany(mappedBy="supplier")
	private List<Product> listProducts = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy="supplier")
	private List<Product> listOrders = new ArrayList<>();
	
	public Supplier() {
		this.createdAt = new Date(System.currentTimeMillis());
	}

	public Supplier(String code, String name, SupplierCategory supplierCategory, String logoImageUrl, String website,
			String email, String phone, String address, String zipCode, State state, String cuit,
			Condition condition, String contactName, String contactSurname, String contactPhone, String contactEmail,
			String contactRole, String district) {
		this.code = code;
		this.name = name;
		this.supplierCategory = supplierCategory;
		this.logoImageUrl = logoImageUrl;
		this.website = website;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.zipCode = zipCode;
		this.state = state;
		this.cuit = cuit;
		this.condition = condition;
		this.contactName = contactName;
		this.contactSurname = contactSurname;
		this.contactPhone = contactPhone;
		this.contactEmail = contactEmail;
		this.contactRole = contactRole;
		this.district = district;
		this.createdAt = new Date(System.currentTimeMillis());
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

	public SupplierCategory getSupplierCategory() {
		return supplierCategory;
	}

	public void setSupplierCategory(SupplierCategory supplierCategory) {
		this.supplierCategory = supplierCategory;
	}

	public String getLogoImageUrl() {
		return logoImageUrl;
	}

	public void setLogoImageUrl(String logoImageUrl) {
		this.logoImageUrl = logoImageUrl;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	public String getCuit() {
		return cuit;
	}

	public void setCuit(String cuit) {
		this.cuit = cuit;
	}

	public Condition getCondition() {
		return condition;
	}

	public void setCondition(Condition condition) {
		this.condition = condition;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactSurname() {
		return contactSurname;
	}

	public void setContactSurname(String contactSurname) {
		this.contactSurname = contactSurname;
	}

	public String getContactPhone() {
		return contactPhone;
	}

	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	public String getContactEmail() {
		return contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getContactRole() {
		return contactRole;
	}

	public void setContactRole(String contactRole) {
		this.contactRole = contactRole;
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

	public List<Product> getListProducts() {
		return listProducts;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}
	
}
