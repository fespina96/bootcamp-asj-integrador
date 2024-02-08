package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Condition;

public interface ConditionRepository extends JpaRepository<Condition, Integer> {

}
