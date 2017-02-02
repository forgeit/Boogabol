<?php

class ClienteModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'cliente';
	}	

	function getValidation() {
		return array(
				'nome' => array('Nome', 'string', '255', true),
				'cpf' => array('CPF', 'int', '11', false),
				'cep' => array('CEP', 'int', '8', false),
				'endereco' => array('Endereço', 'string', '500', false),
				'cidade' => array('Cidade', 'string', '255', false),
				'telefone' => array('Telefone', 'string', '50', false),
				'email' => array('Email', 'string', '255', false)
			);
	}
}