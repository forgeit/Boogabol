<?php

class OrcamentoModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'buffet';
	}	

	function getValidation() {
		return array(
				'nome' => array('Nome', 'string', '255', true),
				'telefone' => array('Telefone', 'string', '50', true),
				'email' => array('Email', 'string', '255', false),
				'nome_aniversariante' => array('Nome Aniversariante', 'string', '255', false),
				'idade_aniversariante' => array('Idade Aniversariante', 'string', '255', false),
				'data' => ('Data', 'date', null, false),
				'tema' => array('Tema', 'string', '255', false),
				'num_convidados' => array('Número Convidados', 'int', null, false),
				'onde_encontrou' => array('Onde Encontrou', 'string', '100', false),
			);
	}
}