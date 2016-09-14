package com.edulemos.rest.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edulemos.rest.entity.Contato;
import com.edulemos.rest.util.EmailUtil;

@Service
public class ContatoService{

	@Autowired
	private EmailUtil emailUtil;

	public void enviarEmail(Contato contato) {
		
		HashMap<String, String> parametros = new HashMap<String, String>();
		parametros.put("#assunto", contato.getAssunto());
		parametros.put("#nome", contato.getNome());
		parametros.put("#msg", contato.getTexto());
		parametros.put("#email", contato.getEmail());

		emailUtil.setAssunto("Contato edulemos.github.io");
		emailUtil.setDestinatario("educlemos@gmail.com");
		emailUtil.setNomeTemplate("email_contato.html");
		emailUtil.setParametros(parametros);
		emailUtil.enviarEmailHtml();
				
	}


	
}
