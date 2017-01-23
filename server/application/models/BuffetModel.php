<?php

class BuffetModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'buffet';
	}	

	function getValidacoes() {
		reuturn array(
				'titulo' => array('string', '255', true),
				'descricao' => array('string', null, false),
				'id_imagem' => array('int', null, false)
			);
	}
}