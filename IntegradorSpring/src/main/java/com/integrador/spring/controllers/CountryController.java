package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.Country;
import com.integrador.spring.models.State;
import com.integrador.spring.services.CountryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/country")
public class CountryController {
	@Autowired
	CountryService countryService;
	
	@GetMapping
	public ResponseEntity<List<Country>> getCountries(){
		return ResponseEntity.ok(countryService.getCountries());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Country> getCountryById(@PathVariable int id){
		return ResponseEntity.ok(countryService.getCountryById(id));
	}
	
	@GetMapping("/{id}/states")
	public ResponseEntity<List<State>> getCountryStatesById(@PathVariable int id){
		return ResponseEntity.ok(countryService.getCountryStatesById(id));
	}
}
