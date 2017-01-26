<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FileUpload extends MY_Controller {

	public function uploadFile() {

		$data = $this->security->xss_clean($_POST['params']);
		print_r($data);
		print_r($_FILES);
	}
	
}