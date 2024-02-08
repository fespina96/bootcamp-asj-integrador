package com.integrador.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.State;
import com.integrador.spring.repositories.StateRepository;

@Service
public class StateService {
	
	@Autowired
	StateRepository stateRepository;
	
	public State getStateById(int id) {
		State  s= null;
		for(State state:stateRepository.findAll()) {
			if(state.getId()==id) {
				s=state;
			}
		}
		return s;
	}
}
