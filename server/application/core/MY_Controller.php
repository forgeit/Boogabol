<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

require_once(APPPATH."helpers/jwt_helper.php");

class MY_Controller extends CI_Controller {
	function __construct() {
        parent::__construct();
    }


    public function isActive() {
    	$pathReq = ($_SERVER['PATH_INFO']);
    	if ($pathReq != '/login') {
    		// Implementar validação JWT
    	}
    	return true;
    }

    public function printReturn($return, $data = null, $message = null) {
    	print_r(json_encode(array('res'=>$return, 'dataRes'=>$data, 'message'=>$message)));
    }

    public function checkValidation($valid) {
    	if ($valid !== OK) {
    		$this->printReturn(ERROR, null, $valid);
    		return false;
    	} else {
    		return true;
    	}
    }
	
}