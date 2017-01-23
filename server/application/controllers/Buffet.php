<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Buffet extends MY_Controller {

	public function atualizar() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		$response = array('exec' => $this->BuffetModel->atualizar($object->id, $object));
		print_r(json_encode($response));
	}

	public function buscar() {
		print_r(json_encode($this->BuffetModel->buscarPorId($this->uri->segment(2))));
	}

	public function buscarTodos() {
		print_r(json_encode($this->BuffetModel->buscarTodos()));

	}

	public function excluir() {
		$response = array('exec' => $this->BuffetModel->excluir($this->uri->segment(3)));
		print_r(json_encode($response));
	}

	public function salvar() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);
		$response = array('exec' => $this->BuffetModel->inserir($object));
		print_r(json_encode($response));
	}
	
}