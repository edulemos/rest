package com.edulemos.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.edulemos.rest.entity.AjaxResponseBody;
import com.edulemos.rest.entity.Cliente;
import com.edulemos.rest.service.ClienteService;

@RestController
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	
	/**
	 * @api {get} /listarClientes
	 * @apiGroup Clientes
	 * @apiDescription Retorna uma listagem de clientes
	 * @apiSuccess {Number} id Identificador da pessoa do agente econômico.
	 * @apiSuccess {Object} registro Dados do registro.
	 * @apiSuccess {Number} registro.id Identificador do registro do agente econômico.
	 * */
    @RequestMapping(value = "/listarClientes", method = RequestMethod.GET)
	public List<Cliente> listarClientes() {		
		return service.findAll();
	}
    
    @RequestMapping(value = "/getCliente/{id}", method = RequestMethod.GET)
    public Cliente getCliente(@PathVariable Long id) {		
    	return service.find(id);
    }
    
    @RequestMapping(value = "/gravarCliente", method = RequestMethod.POST)
    public AjaxResponseBody adicionarCliente(@RequestBody Cliente cliente) {
    	service.save(cliente);
    	return new AjaxResponseBody("success");
    }
    
    @RequestMapping(value = "/removerCliente", method = RequestMethod.POST)
    public AjaxResponseBody removerCliente(@RequestBody Cliente cliente) {
    	service.delete(cliente);
    	return new AjaxResponseBody("success");
    }
    
    
    
    
}
