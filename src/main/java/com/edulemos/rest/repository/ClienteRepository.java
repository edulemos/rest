package com.edulemos.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edulemos.rest.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	
}
