package com.integrador.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Condition;
import com.integrador.spring.repositories.ConditionRepository;

@Service
public class ConditionService {

	@Autowired
	ConditionRepository conditionRepository;
	
	public List<Condition> getConditions(){
		return conditionRepository.findAll();
	}
	
	public Condition getConditionById(int id) {
		Condition c = null;
		for(Condition condition:conditionRepository.findAll()) {
			if(condition.getId()==id) {
				c=condition;
			}
		}
		return c;
	}
}
