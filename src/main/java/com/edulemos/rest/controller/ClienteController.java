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
	 * @api {get} /listarClientes Listar
	 * @apiGroup Clientes
	 * @apiDescription Retorna uma listagem de clientes
     * @apiSuccess {Object[]} clientes Lista de clientes cadastrados
	 * @apiSuccess {Number} clientes.id identificador do cliente
	 * @apiSuccess {String} clientes.nome Nome do cliente
	 * @apiSuccess {String} clientes.telefone Telefone do cliente
	 * @apiSuccess {object} clientes.endereco Obejto Com o Endereço do cliente
	 * @apiSuccess {string} clientes.endereco.id Identificador do cliente
	 * @apiSuccess {string} clientes.endereco.cep Cep do endereço
	 * @apiSuccess {string} clientes.endereco.uf Estado do endereço
	 * @apiSuccess {string} clientes.endereco.localidade Cidade do endereço
	 * @apiSuccess {string} clientes.endereco.bairro Bairro do endereço
	 * @apiSuccess {string} clientes.endereco.logradouro Logradouro do endereço
	 * @apiSuccess {Number} clientes.endereco.numero Número do endereço do endereço
	 * @apiSuccess {string} clientes.endereco.complemento Complemento do endereço do endereço
	 * @apiSuccessExample {json} Success-Response:
	 * [
	 *   {
	 *	"id": 1,
	 *	"nome": "Teste1",
	 *	"telefone": "(22)22222-2222",
	 *	"endereco": {
	 *		"id": 1,
	 *		"cep": "20921-440",
	 *		"uf": "RJ",
	 *		"localidade": "Rio de Janeiro",
	 *		"bairro": "São Cristóvão",
	 *		"logradouro": "Campo São Cristóvão",
	 *		"numero": "100",
	 *		"complemento": "casa"
	 *		}
	 *	},{
	 *  	"id": 2,
	 *  	"nome": "Teste2",
	 *  	"telefone": "(33)33333-3333",
	 *  	"endereco": {
	 *  		"id": 1,
	 *  		"cep": "20921-440",
	 *  		"uf": "RJ",
	 *  		"localidade": "Rio de Janeiro",
	 *  		"bairro": "São Cristóvão",
	 *  		"logradouro": "Campo São Cristóvão",
	 *  		"numero": "100",
	 *  		"complemento": "casa"
	 *  		}
	 *  	]
	 * */
	@RequestMapping(value = "/listarClientes", method = RequestMethod.GET)
	public List<Cliente> listarClientes() {
		return service.findAll();
	}
	
	/**
	 * @api {get} /getCliente/:id Buscar
	 * @apiGroup Clientes	 
	 * @apiDescription Retorna os dados de um cliente	 
	 * @apiParam {Number} id Identificador do Cliente
 	 * @apiSuccess {Number} id identificador do cliente
	 * @apiSuccess {String} nome Nome do cliente
	 * @apiSuccess {String} telefone Telefone do cliente
	 * @apiSuccess {object} endereco Obejto Com o Endereço do cliente
	 * @apiSuccess {string} endereco.id Identificador do cliente
	 * @apiSuccess {string} endereco.cep Cep do endereço
	 * @apiSuccess {string} endereco.uf Estado do endereço
	 * @apiSuccess {string} endereco.localidade Cidade do endereço
	 * @apiSuccess {string} endereco.bairro Bairro do endereço
	 * @apiSuccess {string} endereco.logradouro Logradouro do endereço
	 * @apiSuccess {Number} endereco.numero Número do endereço do endereço
	 * @apiSuccess {string} endereco.complemento Complemento do endereço do endereço
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *	"id": 1,
	 *	"nome": "Teste1",
	 *	"telefone": "(22)22222-2222",
	 *	"endereco": {
	 *		"id": 1,
	 *		"cep": "20921-440",
	 *		"uf": "RJ",
	 *		"localidade": "Rio de Janeiro",
	 *		"bairro": "São Cristóvão",
	 *		"logradouro": "Campo São Cristóvão",
	 *		"numero": "100",
	 *		"complemento": "casa"
	 *		}
	 * }
	 * */
	@RequestMapping(value = "/getCliente/{id}", method = RequestMethod.GET)
	public Cliente getCliente(@PathVariable Long id) {
		return service.find(id);
	}

	/**
	 * @api {post} /gravarCliente Gravar
	 * @apiGroup Clientes	 
	 * @apiDescription Grava os dados de um cliente	 
	 * @apiParam {object} cliente Cliente
 	 * @apiParam {Number="null se for gravar novo","identificador do cliente se for alterar" } cliente.id identificador do cliente
	 * @apiParam {String} cliente.nome Nome do cliente
	 * @apiParam {String} cliente.telefone Telefone do cliente
	 * @apiParam {object} cliente.endereco Obejto Com o Endereço do cliente
	 * @apiParam {string} cliente.endereco.id Identificador do cliente
	 * @apiParam {string} cliente.endereco.cep Cep do endereço
	 * @apiParam {string} cliente.endereco.uf Estado do endereço
	 * @apiParam {string} cliente.endereco.localidade Cidade do endereço
	 * @apiParam {string} cliente.endereco.bairro Bairro do endereço
	 * @apiParam {string} cliente.endereco.logradouro Logradouro do endereço
	 * @apiParam {Number} cliente.endereco.numero Número do endereço do endereço
	 * @apiParam {string} cliente.endereco.complemento Complemento do endereço do endereço	 
	 * @apiSuccessExample {json} Success-Response:
	 * {"success"}
	 * */
	@RequestMapping(value = "/gravarCliente", method = RequestMethod.POST)
	public AjaxResponseBody adicionarCliente(@RequestBody Cliente cliente) {
		service.save(cliente);
		return new AjaxResponseBody("success");
	}

	/**
	 * @api {post} /removerCliente Remover
	 * @apiGroup Clientes	 
	 * @apiDescription Exclui os dados de um cliente	 
	 * @apiParam {object} cliente Cliente
 	 * @apiParam {Number} cliente.id identificador do cliente 
	 * @apiSuccessExample {json} Success-Response:
	 * {"success"}
	 * */
	@RequestMapping(value = "/removerCliente", method = RequestMethod.POST)
	public AjaxResponseBody removerCliente(@RequestBody Cliente cliente) {
		service.delete(cliente);
		return new AjaxResponseBody("success");
	}

}
