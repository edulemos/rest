package com.edulemos.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.edulemos.rest.entity.AjaxResponseBody;
import com.edulemos.rest.entity.Contato;
import com.edulemos.rest.service.ContatoService;

@RestController
public class ContatoController {

	@Autowired
	private ContatoService service;
	
    @RequestMapping(value = "/enviarEmail", method = RequestMethod.POST)
	public AjaxResponseBody adicionarCliente(@RequestBody Contato contato) {
		service.enviarEmail(contato);
		return new AjaxResponseBody("success");
	}    

}
