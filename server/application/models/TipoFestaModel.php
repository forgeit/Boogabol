<?php

class TipoFestaModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'tipo_festa';
	}	

	function getValidation() {
		return array(
				'titulo' => array('Título', 'string', '255', true)
			);
	}
}