package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.Condition;
import com.integrador.spring.services.ConditionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/condition")
public class ConditionController {
	
	@Autowired
	ConditionService conditionService;
	
	@GetMapping
	public ResponseEntity<List<Condition>> getConditions(){
		return ResponseEntity.ok(conditionService.getConditions());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Condition> getConditionById(@PathVariable int id){
		return ResponseEntity.ok(conditionService.getConditionById(id));
	}
}
