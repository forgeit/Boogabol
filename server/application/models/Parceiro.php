<?php

class BuffetModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'buffet';
	}	

	function getValidation() {
		return array(
				'nome' => array('Nome', 'string', '255', true),
				'link' => array('Link', 'string', '255', true)
			);
	}
}