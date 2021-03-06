<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Secao extends MY_Controller {

	public function update() {
		if (!$this->isActive()) {
			return;
		}

		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		unset($object->id_imagem);

		if (!$data) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(10));
			return;
		}

		$valid =  Helper::inputValidation($object, $this->SecaoModel->getValidation());
		if ($this->checkValidation($valid) && $this->checkExec(array('exec' => $this->SecaoModel->update($object->id, $object)))) {	
			$response = array('exec' => $this->SecaoModel->update($object->id, $object));
			$this->printReturn(RET_OK, $object->id, Helper::getMessage(0));
		}
	}

	public function updateItens() {
		if (!$this->isActive()) {
			return;
		}

		$data = $this->security->xss_clean($this->input->raw_input_stream);		
		$object = json_decode($data);
		
		$id = $object->id_secao;
		$this->SecaoModel->deleteItens($id);

		$list = $object->list;
		foreach ($list as $value) {
			if (!$this->checkExec(array('exec' => $this->SecaoModel->insertItem($id, $value->id)))) {
				return;
			}			
		}

		$this->printReturn(RET_OK, null, Helper::getMessage(0));
	}

	public function find() {
		if (!$this->isActive()) {
			return;
		}

		print_r(json_encode($this->SecaoModel->findById($this->uri->segment(3))));
	}

	public function findItens() {
		if (!$this->isActive()) {
			return;
		}

		print_r(json_encode($this->SecaoModel->findItens($this->uri->segment(3))));
	}

	public function findAll() {
		if (!$this->isActive()) {
			return;
		}
		$this->printReturn(RET_OK, $this->SecaoModel->findAll());		
	}

	public function insert() {
		if (!$this->isActive()) {
			return;
		}		

		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		unset($object->id_imagem);
		if (!$data) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(10));
			return;
		}
		
		$valid =  Helper::inputValidation($object, $this->SecaoModel->getValidation());
		if ($this->checkValidation($valid) && $this->checkExec(array('exec' => $this->SecaoModel->save($object)))) {			
			$this->printReturn(RET_OK, $this->SecaoModel->getLastInsertedId(), Helper::getMessage(0));
		}		
	}

	public function remove() {
		if (!$this->isActive()) {
			return;
		}

		$data = $this->SecaoModel->findById($this->uri->segment(3));		
		if ($this->checkExec(array('exec' => $this->SecaoModel->remove($this->uri->segment(3))))) {			
			$this->printReturn(RET_OK, null, Helper::getMessage(1));	
		}
		
	}
}