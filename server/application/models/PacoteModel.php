<?php

class PacoteModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'pacote';
	}	

	function findSecoes($idPacote) {
		$query = $this->db->query(
			"SELECT s.* " .
			"FROM pacote_secao pi " .
			"JOIN secao s ON s.id = pi.id_secao " .
			"WHERE pi.id_pacote = ? ", 
			array($idSecao)
			);
		return $query->result_array();
	}

	function getValidation() {
		return array(
				'titulo' => array('Título', 'string', '255', true),
				'duracao_festa' => array('Duração da Festa', 'string', '45', false)
			);
	}
}