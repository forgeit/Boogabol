<?php

class CardapioModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'cardapio';
	}	

	function getValidation() {
		return array(
				'titulo' => array('Título', 'string', '255', true)
			);
	}
}