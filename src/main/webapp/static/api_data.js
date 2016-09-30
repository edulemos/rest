define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/main/webapp/static/main.js",
    "group": "C__Users_eduardo_lemos_Documents__desenv_novo_git_rest_src_main_webapp_static_main_js",
    "groupTitle": "C__Users_eduardo_lemos_Documents__desenv_novo_git_rest_src_main_webapp_static_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./target/classes/static/main.js",
    "group": "C__Users_eduardo_lemos_Documents__desenv_novo_git_rest_target_classes_static_main_js",
    "groupTitle": "C__Users_eduardo_lemos_Documents__desenv_novo_git_rest_target_classes_static_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/getCliente/:id",
    "title": "Buscar",
    "group": "Clientes",
    "description": "<p>Retorna os dados de um cliente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do Cliente</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "endereco",
            "description": "<p>Obejto Com o Endereço do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.id",
            "description": "<p>Identificador do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.cep",
            "description": "<p>Cep do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.uf",
            "description": "<p>Estado do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.localidade",
            "description": "<p>Cidade do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.bairro",
            "description": "<p>Bairro do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.logradouro",
            "description": "<p>Logradouro do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": "<p>Número do endereço do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "endereco.complemento",
            "description": "<p>Complemento do endereço do endereço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"id\": 1,\n\t\"nome\": \"Teste1\",\n\t\"telefone\": \"(22)22222-2222\",\n\t\"endereco\": {\n\t\t\"id\": 1,\n\t\t\"cep\": \"20921-440\",\n\t\t\"uf\": \"RJ\",\n\t\t\"localidade\": \"Rio de Janeiro\",\n\t\t\"bairro\": \"São Cristóvão\",\n\t\t\"logradouro\": \"Campo São Cristóvão\",\n\t\t\"numero\": \"100\",\n\t\t\"complemento\": \"casa\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/edulemos/rest/controller/ClienteController.java",
    "groupTitle": "Clientes",
    "name": "GetGetclienteId"
  },
  {
    "type": "get",
    "url": "/listarClientes",
    "title": "Listar",
    "group": "Clientes",
    "description": "<p>Retorna uma listagem de clientes</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de clientes cadastrados</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clientes.id",
            "description": "<p>identificador do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientes.nome",
            "description": "<p>Nome do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientes.telefone",
            "description": "<p>Telefone do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "clientes.endereco",
            "description": "<p>Obejto Com o Endereço do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.id",
            "description": "<p>Identificador do cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.cep",
            "description": "<p>Cep do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.uf",
            "description": "<p>Estado do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.localidade",
            "description": "<p>Cidade do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.bairro",
            "description": "<p>Bairro do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.logradouro",
            "description": "<p>Logradouro do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clientes.endereco.numero",
            "description": "<p>Número do endereço do endereço</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientes.endereco.complemento",
            "description": "<p>Complemento do endereço do endereço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n\t\"id\": 1,\n\t\"nome\": \"Teste1\",\n\t\"telefone\": \"(22)22222-2222\",\n\t\"endereco\": {\n\t\t\"id\": 1,\n\t\t\"cep\": \"20921-440\",\n\t\t\"uf\": \"RJ\",\n\t\t\"localidade\": \"Rio de Janeiro\",\n\t\t\"bairro\": \"São Cristóvão\",\n\t\t\"logradouro\": \"Campo São Cristóvão\",\n\t\t\"numero\": \"100\",\n\t\t\"complemento\": \"casa\"\n\t\t}\n\t},{\n \t\"id\": 2,\n \t\"nome\": \"Teste2\",\n \t\"telefone\": \"(33)33333-3333\",\n \t\"endereco\": {\n \t\t\"id\": 1,\n \t\t\"cep\": \"20921-440\",\n \t\t\"uf\": \"RJ\",\n \t\t\"localidade\": \"Rio de Janeiro\",\n \t\t\"bairro\": \"São Cristóvão\",\n \t\t\"logradouro\": \"Campo São Cristóvão\",\n \t\t\"numero\": \"100\",\n \t\t\"complemento\": \"casa\"\n \t\t}\n \t]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/edulemos/rest/controller/ClienteController.java",
    "groupTitle": "Clientes",
    "name": "GetListarclientes"
  },
  {
    "type": "post",
    "url": "/gravarCliente",
    "title": "Gravar",
    "group": "Clientes",
    "description": "<p>Grava os dados de um cliente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "cliente",
            "description": "<p>Cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"null se for gravar novo\"",
              "\"identificador do cliente se for alterar\""
            ],
            "optional": false,
            "field": "cliente.id",
            "description": "<p>identificador do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente.nome",
            "description": "<p>Nome do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente.telefone",
            "description": "<p>Telefone do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "cliente.endereco",
            "description": "<p>Obejto Com o Endereço do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.id",
            "description": "<p>Identificador do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.cep",
            "description": "<p>Cep do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.uf",
            "description": "<p>Estado do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.localidade",
            "description": "<p>Cidade do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.bairro",
            "description": "<p>Bairro do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.logradouro",
            "description": "<p>Logradouro do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cliente.endereco.numero",
            "description": "<p>Número do endereço do endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cliente.endereco.complemento",
            "description": "<p>Complemento do endereço do endereço</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/edulemos/rest/controller/ClienteController.java",
    "groupTitle": "Clientes",
    "name": "PostGravarcliente"
  },
  {
    "type": "post",
    "url": "/removerCliente",
    "title": "Remover",
    "group": "Clientes",
    "description": "<p>Exclui os dados de um cliente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "cliente",
            "description": "<p>Cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cliente.id",
            "description": "<p>identificador do cliente</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/edulemos/rest/controller/ClienteController.java",
    "groupTitle": "Clientes",
    "name": "PostRemovercliente"
  },
  {
    "type": "post",
    "url": "/enviarEmail",
    "title": "Enviar email",
    "group": "Contato",
    "description": "<p>Envia um email de contato</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "contato",
            "description": "<p>contato</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contato.nome",
            "description": "<p>Nome do contato</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contato.email",
            "description": "<p>Email do contato</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contato.assunto",
            "description": "<p>Assunto do email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contato.texto",
            "description": "<p>Texto do email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"nome\": \"fulano\",\n  \"email\": \"fulano@email.com\",\n  \"assunto\": \"Duvida\",\n  \"texto\": \"Quem descobriu o Brasil?\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/edulemos/rest/controller/ContatoController.java",
    "groupTitle": "Contato",
    "name": "PostEnviaremail"
  }
] });
