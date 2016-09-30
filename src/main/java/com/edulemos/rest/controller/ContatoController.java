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
	
	/**
	 * @api {post} /enviarEmail Enviar email
	 * @apiGroup Contato	 
	 * @apiDescription Envia um email de contato	 
	 * @apiParam {object} contato contato
 	 * @apiParam {string} contato.nome Nome do contato 
 	 * @apiParam {string} contato.email Email do contato 
 	 * @apiParam {string} contato.assunto Assunto do email 
 	 * @apiParam {string} contato.texto Texto do email
 	 * @apiParamExample {json} Request-Example:
	 *  {
	 *    "nome": "fulano",
	 *    "email": "fulano@email.com",
	 *    "assunto": "Duvida",
	 *    "texto": "Quem descobriu o Brasil?",
	 *   } 
	 * @apiSuccessExample {json} Success-Response:
	 * {"success"}
	 * */
    @RequestMapping(value = "/enviarEmail", method = RequestMethod.POST)
	public AjaxResponseBody adicionarCliente(@RequestBody Contato contato) {
		service.enviarEmail(contato);
		return new AjaxResponseBody("success");
	}    

}
