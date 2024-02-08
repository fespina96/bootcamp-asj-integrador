package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

}
