package com.edulemos.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edulemos.rest.entity.Cliente;
import com.edulemos.rest.repository.ClienteRepository;
import com.edulemos.rest.util.Util;

@Service
public class ClienteService extends Util {

	@Autowired
	private ClienteRepository repository;

	public void save(Cliente cliente) {
		repository.save(cliente);		
	}

	public List<Cliente> findAll() {
		return repository.findAll();
	}

	public Cliente find(Long id) {
		return repository.findOne(id);
	}

	public void delete(Cliente cliente) {
		repository.delete(cliente);	
	}

	
}
