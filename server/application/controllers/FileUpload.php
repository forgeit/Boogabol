<?php

define('Module_Buffet', 'buffet');
define('Module_Atracao', 'atracao');
define('Module_Cardapio', 'cardapio');
define('Module_TipoFesta', 'tipoFesta');


defined('BASEPATH') OR exit('No direct script access allowed');

class FileUpload extends MY_Controller {

	/**
	*	Faz o upload de um arquivo de acordo com o módulo
	*/
	public function uploadFile() {

		if (!$_POST['params'] || !$_POST['params'][0] || !$_POST['params'][0] || !$_FILES['uploads']) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
			return;
		}

		$data = $this->security->xss_clean($_POST['params']);
		$id = $data[0];
		$module = $data[1];

		switch ($module) {

			case Module_Buffet:
			$idImagem = $this->InsertImage($id, $module);
			if ($idImagem) {
				$elemData = json_encode($this->BuffetModel->findById($id));
				$object = json_decode($elemData);
				
				$idImagemOld = null;
				if ($object->id_imagem) {
					$idImagemOld = $object->id_imagem;
				}

				$object->id_imagem = $idImagem;				
				if ($this->checkExec(array('exec' => $this->BuffetModel->update($id, $object)))) {
					if ($idImagemOld) {
						$this->ArquivoModel->deleteArquivo($idImagemOld);
					}	
					$this->printReturn(RET_OK);
				}
			}
			break;

			case Module_Atracao:
			$idImagem = $this->InsertImage($id, $module);
			if ($idImagem) {
				$elemData = json_encode($this->AtracaoModel->findById($id));
				$object = json_decode($elemData);
				
				$idImagemOld = null;
				if ($object->id_imagem) {
					$idImagemOld = $object->id_imagem;
				}

				$object->id_imagem = $idImagem;				
				if ($this->checkExec(array('exec' => $this->AtracaoModel->update($id, $object)))) {
					if ($idImagemOld) {
						$this->ArquivoModel->deleteArquivo($idImagemOld);
					}	
					$this->printReturn(RET_OK);
				}
			}
			break;

			case Module_Cardapio:
			$idImagem = $this->InsertImage($id, $module);
			if ($idImagem) {
				$elemData = json_encode($this->CardapioModel->findById($id));
				$object = json_decode($elemData);
				
				$idImagemOld = null;
				if ($object->id_imagem) {
					$idImagemOld = $object->id_imagem;
				}

				$object->id_imagem = $idImagem;				
				if ($this->checkExec(array('exec' => $this->CardapioModel->update($id, $object)))) {
					if ($idImagemOld) {
						$this->ArquivoModel->deleteArquivo($idImagemOld);
					}	
					$this->printReturn(RET_OK);
				}
			}
			break;

			case Module_TipoFesta:
			$idImagem = $this->InsertImage($id, $module);
			if ($idImagem) {
				$elemData = json_encode($this->TipoFestaModel->findById($id));
				$object = json_decode($elemData);
				
				$idImagemOld = null;
				if ($object->id_imagem) {
					$idImagemOld = $object->id_imagem;
				}

				$object->id_imagem = $idImagem;				
				if ($this->checkExec(array('exec' => $this->TipoFestaModel->update($id, $object)))) {
					if ($idImagemOld) {
						$this->ArquivoModel->deleteArquivo($idImagemOld);
					}	
					$this->printReturn(RET_OK);
				}
			}
			break;
			
			default:
			$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
			break;
		}

	}

	/**
	*	Insere uma imagem na tabela, move a imagem para a pasta correta
	*/
	private function InsertImage($id, $module) {

		$files = ImageHelper::filesToArray();		

		if (!ImageHelper::checkImage($files)) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(11));
			return;
		}	
		
		$img = ImageHelper::filesToArquivoModel($files, $module)[0];
		$response = array('exec' => $this->ArquivoModel->save($img));
		$img['id'] = ($this->ArquivoModel->getLastInsertedId());
		if (!$response['exec']) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
		}
		
		ImageHelper::createFolders($module);
		$path = ImageHelper::saveArchive($module, $files[0], $img['id']);
		if (!$path) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
			return;
		}

		$img['caminho'] = $path;
		if (!$this->checkExec(array('exec' => $this->ArquivoModel->update($img['id'], $img)))) {
			return null;
		}

		return $img['id'];		
	}


	private function InsertImages($id, $module) {
		$files = ImageHelper::filesToArray();		

		if (!ImageHelper::checkImage($files)) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(11));
			return;
		}	

		ImageHelper::createFolders($module);

		foreach ($files as $file) {
			if (!ImageHelper::saveArchive($module, $file, $idImage)) {
				$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
				return;
			}
		}

		$this->printReturn(RET_OK);
	}
	
}