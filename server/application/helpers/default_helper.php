<?php

class Helper {
	

	public static function inputValidation($object, $validations) {
		$arr = (array)$object;
				
		foreach ($validations as $key => $value) {			
			if ($value[3] && self::isNullOrEmpty($arr[$key])) { //Required
				return self::getMessage(20, $value[0]);
			}
			if ($value[2] && strlen($arr[$key]) > $value[2]) {
				return self::getMessage(21, $value[0]);
			} 
			if ($value[1] && !self::typeValid($value[1], $arr[$key])) {
				return self::getMessage(22, $value[0]);
			}
		}

		return OK;
	}

	public static function isNullOrEmpty($value) {
		return !$value || $value === '' || is_null($value);			
	}

	public static function typeValid($type, $data) {
		return true; // ----- Implementar
	}

	public static function getMessage($cod, $field = null) {
		switch($cod) {
			case 0:
			return "Registro Salvo";
			break;
			case 1:
			return "Registro Excluído";
			break;

			case 10: 
			return "Erro ao Salvar os Dados";						
			break;
			case 11:
			return "Imagens devem ser de no máximo 1Mb e no formato jpg/jpeg";
			break;
			case 12:
			return "Erro ao salvar os arquivos";
			break;

			case 20:
			return $field.' é Obrigatório';
			break;
			case 21:
			return $field.' muito Longo';
			break;
			case 22:
			return $field.' Inválido';
			break;
		} 
	}


}