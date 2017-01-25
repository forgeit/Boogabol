<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Buffet extends MY_Controller {

	public function update() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		$response = array('exec' => $this->BuffetModel->update($object->id, $object));
		print_r(json_encode($response));
	}

	public function find() {
		print_r(json_encode($this->BuffetModel->findById($this->uri->segment(3))));
	}

	public function findAll() {
		print_r(json_encode($this->BuffetModel->findAll()));
	}

	public function remove() {
		$response = array('exec' => $this->BuffetModel->remove($this->uri->segment(3)));
		print_r(json_encode($response));
	}

	public function save() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		$response = array('exec' => $this->BuffetModel->save($object));
		print_r(json_encode($response));
	}
	
}