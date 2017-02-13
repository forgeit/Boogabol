<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

class MY_Model extends CI_Model {
    var $table = "";
    
    function __construct() {
        parent::__construct();
    }
    
    function save($data) {
        if (!isset($data)) {
            return false;
        }
        return $this->db->insert($this->table, $data);
    }    
    
    function findById($id) {
        if(is_null($id)) {
            return false;
        }

        $this->db->where('id', $id);

        $query = $this->db->get($this->table);

        if ($query->num_rows() > 0) {
            return $query->row_array();
        } else {
            return null;
        }
    }
    
    function findAll($sort = 'id', $order = 'asc') {
        $this->db->order_by($sort, $order);

        $query = $this->db->get($this->table);

        if ($query->num_rows() > 0) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function update($id, $data) {
        if(is_null($id) || !isset($data)) {
            return false;
        }

        $this->db->where('id', $id);
        return $this->db->update($this->table, $data);
    }
    
    function remove($id) {
        if(is_null($id)) {
            return false;
        }

        $this->db->where('id', $id);
        return $this->db->delete($this->table);
    }

    function getLastInsertedId() {
        return $this->db->insert_id();
    }

    function getRandomOfTable($table) {
        $query = $this->db->query("SELECT * FROM ".$table." ORDER BY RAND() LIMIT 1");
        if ($query->num_rows() > 0) {
            return $query->row_array();
        } else {
            return null;
        }
    }

    function printError() {        
        print_r($this->db->error());
    }
}