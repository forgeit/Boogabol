<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Buffet extends MY_Controller {

	public function update() {
		if (!$this->isActive()) {
			return;
		}

		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		//$valid = $this->Helper->inputValidation($object, $BuffetModel->getValidation());
		//if ($valid !== Helper::OK) {

		//}
		$response = array('exec' => $this->BuffetModel->update($object->id, $object));
		print_r(json_encode($response));
	}

	public function find() {
		if (!$this->isActive()) {
			return;
		}

		print_r(json_encode($this->BuffetModel->findById($this->uri->segment(3))));
	}

	public function findAll() {
		if (!$this->isActive()) {
			return;
		}
		$this->printReturn(Helper::OK, $this->BuffetModel->findAll());		
	}

	public function remove() {
		if (!$this->isActive()) {
			return;
		}

		$response = array('exec' => $this->BuffetModel->remove($this->uri->segment(3)));
		print_r(json_encode($response));
	}

	public function save() {
		if (!$this->isActive()) {
			return;
		}

		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		$response = array('exec' => $this->BuffetModel->save($object));
		print_r(json_encode($response));
	}
	
}