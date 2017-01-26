<?php

class Helper {
	

	public static function inputValidation($data, $validations) {
		foreach ($variable as $key => $value) {
			if ($value[3] && self::isNullOrEmpty($data[$key])) { //Required
				return self::getMessage(20, $value[0]);
			}
			if ($value[2] && strlen($data[$key]) > $value[2]) {
				return self::getMessage(21, $value[0]);
			} 
			if ($value[1] && self::typeValid($value[1], $data[$key])) {
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

			case 10: 
			return "Erro ao Salvar os Dados";
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