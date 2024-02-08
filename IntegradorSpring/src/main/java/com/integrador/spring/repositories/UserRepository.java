package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.User;

public interface UserRepository extends JpaRepository<User,Integer>{

}
