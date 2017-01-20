<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {
	function __construct() {
        parent::__construct();

        print_r($this->uri->segment(0));
        print_r($this->uri->segment(1));
    }
	
}