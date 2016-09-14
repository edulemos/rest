package com.edulemos.rest.entity;

import java.io.Serializable;

public class Contato implements Serializable {

	private static final long serialVersionUID = 1L;
	private String nome;
	private String email;
	private String assunto;
	private String texto;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}
}
