<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

require_once(APPPATH."helpers/jwt_helper.php");

class MY_Controller extends CI_Controller {
	function __construct() {
        parent::__construct();
    }


    public function isActive() {
    	$pathReq = ($_SERVER['PATH_INFO']);
        if ($pathReq != '/usuario/login') {
            $headers = getallheaders();
            if (isset($headers['Authorization'])) {
                $auth = getallheaders()['Authorization'];
                if (JWT::decodeWithTime($auth) !== 0) {
                    $this->printReturn(RET_LOGIN);
                    return false;
                }
            } else {
                $this->printReturn(RET_LOGIN);
                return false;
            }
        }
        return true;
    }

    public function printReturn($return, $data = null, $message = null) {
    	print_r(json_encode(array('res'=>$return, 'dataRes'=>$data, 'message'=>$message)));
    }

    public function checkValidation($valid) {
    	if ($valid !== OK) {
    		$this->printReturn(RET_ERROR, null, $valid);
    		return false;
    	} else {
    		return true;
    	}
    }

    public function checkExec($response) {
        if (!$response['exec']) {
            $this->printReturn(RET_ERROR, null, Helper::getMessage(10));
            return false;
        } else {
            return true;
        }
    }
    

}