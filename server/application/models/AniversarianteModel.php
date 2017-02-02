<?php

class AniversarianteModel extends MY_Model {
	function __construct() {
		parent::__construct();
		$this->table = 'aniversariante';
	}

	 function findByIdCliente($id) {
        if(is_null($id)) {
            return false;
        }

        $this->db->where('id_cliente', $id);

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
				'dt_nasc' => array('Data Nascimento', 'date', null, true)
			);
	}
}