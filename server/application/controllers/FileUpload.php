<?php

define('Module_Buffet', 'buffet');


defined('BASEPATH') OR exit('No direct script access allowed');

class FileUpload extends MY_Controller {

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
			$this->InsertImage($id, $module);
			break;
			
			default:
			$this->printReturn(RET_ERROR, null, Helper::getMessage(12));
			break;
		}

	}

	private function InsertImage($id, $module) {

		$files = ImageHelper::filesToArray();		

		if (!ImageHelper::checkImage($files)) {
			$this->printReturn(RET_ERROR, null, Helper::getMessage(11));
			return;
		}	
		
		$img = ImageHelper::filesToImages($files, $module)[0];
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
		$response = array('exec' => $this->ArquivoModel->update($img['id'], $img));

		$this->printReturn(RET_OK);		
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