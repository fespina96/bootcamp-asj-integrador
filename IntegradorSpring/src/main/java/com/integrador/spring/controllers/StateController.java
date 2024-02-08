package com.integrador.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.State;
import com.integrador.spring.services.StateService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/state")
public class StateController {
	@Autowired
	StateService stateService;
	
	@GetMapping("/{id}")
	public ResponseEntity<State> getStateById(@PathVariable int id){
		return ResponseEntity.ok(stateService.getStateById(id));
	}
}
