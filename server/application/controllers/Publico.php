<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Publico extends MY_Controller {

	public function home() {
		$cardapio = $this->CardapioModel->getRandomOfTable('cardapio');
		$tipoFesta = $this->TipoFestaModel->getRandomOfTable('tipo_festa');
		$atracao = $this->AtracaoModel->getRandomOfTable('atracao');
		$buffet = $this->BuffetModel->getRandomOfTable('buffet');

		print_r(json_encode(array(
			'cardapio'=>$cardapio,
			'tipoFesta'=>$tipoFesta,
			'atracao'=>$atracao,
			'buffet'=>$buffet
			)));
	}

	public function atracoes() {
		print_r(json_encode($this->AtracaoModel->findAll()));
	}

	public function tipoFesta() {
		print_r(json_encode($this->TipoFestaModel->findAll()));
	}

	public function buffet() {
		print_r(json_encode($this->BuffetModel->findAll()));
	}

	public function cardapio() {
		print_r(json_encode($this->CardapioModel->findAll()));
	}

	public function orcamento() {
		print_r(json_encode(array(
			'tipoFestaList' =>$this->TipoFestaModel->findAll(),
			'decoracaoList' =>$this->DecoracaoModel->findAll()
			));	
	}

	public function saveOrcamento() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);

		if (!$data) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(10));
			return;
		}
		
		$valid =  Helper::inputValidation($object, $this->OrcamentoModel->getValidation());
		if ($this->checkValidation($valid) && $this->checkExec(array('exec' => $this->AtracaoModel->save($object)))) {			
			$this->printReturn(RET_OK, null, Helper::getMessage(2));
		}	
	}

	public function parceiros() {
		print_r(json_encode($this->ParceiroModel->findAll()));
	}

	public function saveContato() {
		$data = $this->security->xss_clean($this->input->raw_input_stream);
		$object = json_decode($data);

		if (!$data) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(10));
			return;
		}

		$message = ''.
		'NOME: ' . $object->nome . "\r\n"
		'TELEFONE: ' . $object->telefone . "\r\n"
		'EMAIL: ' . $object->email . "\r\n" .
		'MENSAGEM: ' . wordwrap($object->mensagem, 70, "\r\n");

		$message = wordwrap($message, 70, "\r\n");

		mail($this->emailContato, 'Contato Site', $message);

		$this->printReturn(RET_OK, null, Helper::getMessage(3));
	}

}