<?php

class OrcamentoModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'orcamento';
	}	

	function lerOrcamento($id) {
		$this->db->query('UPDATE orcamento SET flag_lido = TRUE WHERE id = ?', array($id));
		return true;
	}

	function getOrcamentosNaoLidos() {
		$this->db->where('flag_lido', 'FALSE');

		$query = $this->db->get($this->table);

		if ($query->num_rows() > 0) {
			return $query->row_array();
		} else {
			return null;
		}
	}

	function getValidation() {
		return array(
			'nome' => array('Nome', 'string', '255', true),
			'telefone' => array('Telefone', 'string', '50', true),
			'email' => array('Email', 'string', '255', false),
			'nome_aniversariante' => array('Nome Aniversariante', 'string', '255', false),
			'idade_aniversariante' => array('Idade Aniversariante', 'string', '255', false),
			'data' => array('Data da Festa', 'date', null, false),
			'tema' => array('Tema', 'string', '255', false),
			'num_convidados' => array('Número Convidados', 'int', null, false),
			'onde_encontrou' => array('Onde Encontrou', 'string', '100', false),
			);
	}
}