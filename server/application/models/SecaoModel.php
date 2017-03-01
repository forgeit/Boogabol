<?php

class SecaoModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'secao';
	}	

	function findItens($idSecao) {
		$query = $this->db->query(
			"SELECT i.* " .
			"FROM secao_item si " .
			"JOIN item i ON i.id = si.id_item " .
			"WHERE si.id_secao = ? ", 
			array($idSecao)
			);
		return $query->result_array();
	}

	function getValidation() {
		return array(
			);
	}
}