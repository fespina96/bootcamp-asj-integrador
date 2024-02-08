package com.integrador.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Country;
import com.integrador.spring.models.State;
import com.integrador.spring.repositories.CountryRepository;

@Service
public class CountryService {

	@Autowired
	CountryRepository countryRepository;
	
	public List<Country> getCountries(){
		return countryRepository.findAll();
	}
	
	public Country getCountryById(int id) {
		Country c = null;
		for(Country country:countryRepository.findAll()) {
			if(country.getId()==id) {
				c=country;
			}
		}
		return c;
	}
	
	public List<State> getCountryStatesById(int id){
		return countryRepository.findById(id).get().getListStates();
	}
}
