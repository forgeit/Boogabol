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

	}

	public function tipoFesta() {

	}

	public function buffet() {

	}

	public function cardapio() {

	}

	public function orcamento() {

	}

	public function parceiros() {

	}

}