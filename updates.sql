-- 20/02/2017
-- FEITO EM TODOS
CREATE TABLE newsletter (id INTEGER AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE); --FEITO


-- 22/02/2017
-- FEITO EM TODOS
CREATE TABLE cidade (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) UNIQUE);
INSERT INTO cidade (nome) VALUES ('Agua Santa'),('Agudo'),('Ajuricaba'),('Alecrim'),('Alegrete'),('Alegria'),('Alpestre'),('Alto Alegre'),('Alto Feliz'),('Alvorada'),('Amaral Ferrador'),('Ametista do Sul'),('Andre da Rocha'),('Anta Gorda'),('Antonio Prado'),('Arambare'),('Ararica'),('Aratiba'),('Arroio Grande'),('Arroio do Meio'),('Arroio do Sal'),('Arroio do Tigre'),('Arroio dos Ratos'),('Arvorezinha'),('Augusto Pestana'),('Aurea'),('Bage'),('Balneario Pinhal'),('Barao de Cotegipe'),('Barao do Triunfo'),('Barao'),('Barra Funda'),('Barra do Guarita'),('Barra do Quarai'),('Barra do Ribeiro'),('Barra do Rio Azul'),('Barracao'),('Barros Cassal'),('Benjamin Constant do Sul'),('Bento Goncalves'),('Boa Vista das Missoes'),('Boa Vista do Burica'),('Boa Vista do Sul'),('Bom Jesus'),('Bom Principio'),('Bom Progresso'),('Bom Retiro do Sul'),('Boqueirao do Leao'),('Bossoroca'),('Braga'),('Brochier'),('Butia'),('Cacapava do Sul'),('Cacequi'),('Cachoeira do Sul'),('Cachoeirinha'),('Cacique Doble'),('Caibate'),('Caicara'),('Camaqua'),('Camargo'),('Cambara do Sul'),('Campestre da Serra'),('Campina das Missoes'),('Campinas do Sul'),('Campo Bom'),('Campo Novo'),('Campos Borges'),('Candelaria'),('Candido Godoi'),('Candiota'),('Canela'),('Cangucu'),('Canoas'),('Capao da Canoa'),('Capao do Leao'),('Capela de Santana'),('Capitao'),('Capivari do Sul'),('Caraa'),('Carazinho'),('Carlos Barbosa'),('Carlos Gomes'),('Casca'),('Caseiros'),('Catuipe'),('Caxias do Sul'),('Centenario'),('Cerrito'),('Cerro Branco'),('Cerro Grande do Sul'),('Cerro Grande'),('Cerro Largo'),('Chapada'),('Charqueadas'),('Charrua'),('Chiapeta'),('Chui'),('Chuvisca'),('Cidreira'),('Ciriaco'),('Colinas'),('Colorado'),('Condor'),('Constantina'),('Coqueiros do Sul'),('Coronel Barros'),('Coronel Bicaco'),('Cotipora'),('Coxilha'),('Crissiumal'),('Cristal do Sul'),('Cristal'),('Cruz Alta'),('Cruzeiro do Sul'),('David Canabarro'),('Derrubadas'),('Dezesseis de Novembro'),('Dilermano de Aguiar'),('Dois Irmaos das Missoes'),('Dois Irmaos'),('Dois Lajeados'),('Dom Feliciano'),('Dom Pedrito'),('Dom Pedro de Alcantara'),('Dona Francisca'),('Doutor Mauricio Cardoso'),('Doutor Ricardo'),('Eldorado do Sul'),('Encantado'),('Encruzilhada do Sul'),('Engenho Velho'),('Entre Rios do Sul'),('Entre-Ijuis'),('Erebango'),('Erechim'),('Ernestina'),('Erval Grande'),('Erval Seco'),('Esmeralda'),('Esperanca do Sul'),('Espumoso'),('Estacao'),('Estancia Velha'),('Esteio'),('Estrela Velha'),('Estrela'),('Eugenio de Castro'),('Fagundes Varela'),('Farroupilha'),('Faxinal do Soturno'),('Faxinalzinho'),('Fazenda Vilanova'),('Feliz'),('Flores da Cunha'),('Floriano Peixoto'),('Fontoura Xavier'),('Formigueiro'),('Fortaleza dos Valos'),('Frederico Westphalen'),('Garibaldi'),('Garruchos'),('Gaurama'),('General Camara'),('Gentil'),('Getulio Vargas'),('Girua'),('Glorinha'),('Gramado Xavier'),('Gramado dos Loureiros'),('Gramado'),('Gravatai'),('Guabiju'),('Guaiba'),('Guapore'),('Guarani das Missoes'),('Harmonia'),('Herval'),('Herveiras'),('Horizontina'),('Hulha Negra'),('Humaita'),('Ibarama'),('Ibiaca'),('Ibiraiaras'),('Ibirapuita'),('Ibiruba'),('Igrejinha'),('Ijui'),('Ilopolis'),('Imbe'),('Imigrante'),('Independencia'),('Inhacora'),('Ipe'),('Ipiranga do Sul'),('Irai'),('Itaara'),('Itacurubi'),('Itapuca'),('Itaqui'),('Itatiba do Sul'),('Ivora'),('Ivoti'),('Jaboticaba'),('Jacutinga'),('Jaguarao'),('Jaguari'),('Jaquirana'),('Jari'),('Joia'),('Julio de Castilhos'),('Lagoa Vermelha'),('Lagoa dos Tres Cantos'),('Lagoao'),('Lajeado do Bugre'),('Lajeado'),('Lavras do Sul'),('Liberato Salzano'),('Lindolfo Collor'),('Linha Nova'),('Macambara'),('Machadinho'),('Mampituba'),('Manoel Viana'),('Maquine'),('Marata'),('Marau'),('Marcelino Ramos'),('Mariana Pimentel'),('Mariano Moro'),('Marques de Souza'),('Mata'),('Mato Castelhano'),('Mato Leitao'),('Maximiliano de Almeida'),('Minas do Leao'),('Miraguai'),('Montauri'),('Monte Alegre dos Campos'),('Monte Belo do Sul'),('Montenegro'),('Mormaco'),('Morrinhos do Sul'),('Morro Redondo'),('Morro Reuter'),('Mostardas'),('Mucum'),('Muitos Capoes'),('Muliterno'),('Nao-Me-Toque'),('Nicolau Vergueiro'),('Nonoai'),('Nova Alvorada'),('Nova Araca'),('Nova Bassano'),('Nova Boa Vista'),('Nova Brescia'),('Nova Candelaria'),('Nova Esperanca do Sul'),('Nova Hartz'),('Nova Padua'),('Nova Palma'),('Nova Petropolis'),('Nova Prata'),('Nova Ramada'),('Nova Roma do Sul'),('Nova Santa Rita'),('Novo Barreiro'),('Novo Cabrais'),('Novo Hamburgo'),('Novo Machado'),('Novo Tiradentes'),('Osorio'),('Paim Filho'),('Palmares do Sul'),('Palmeira das Missoes'),('Palmitinho'),('Panambi'),('Pantano Grande'),('Parai'),('Paraiso do Sul'),('Pareci Novo'),('Parobe'),('Passa Sete'),('Passo Fundo'),('Passo do Sobrado'),('Paverama'),('Pedro Osorio'),('Pejucara'),('Pelotas'),('Picada Cafe'),('Pinhal Grande'),('Pinhal'),('Pinheirinho do Vale'),('Pinheiro Machado'),('Pirapo'),('Piratini'),('Planalto'),('Poco das Antas'),('Pontao'),('Ponte Preta'),('Portao'),('Porto Alegre'),('Porto Lucena'),('Porto Maua'),('Porto Vera Cruz'),('Porto Xavier'),('Pouso Novo'),('Presidente Lucena'),('Progresso'),('Protasio Alves'),('Putinga'),('Quarai'),('Quevedos'),('Quinze de Novembro'),('Redentora'),('Relvado'),('Restinga Seca'),('Rio Grande'),('Rio Pardo'),('Rio dos Indios'),('Riozinho'),('Roca Sales'),('Rodeio Bonito'),('Rolante'),('Ronda Alta'),('Rondinha'),('Roque Gonzales'),('Rosario do Sul'),('Sagrada Familia'),('Saldanha Marinho'),('Salto do Jacui'),('Salvador das Missoes'),('Salvador do Sul'),('Sananduva'),('Santa Barbara do Sul'),('Santa Clara do Sul'),('Santa Cruz do Sul'),('Santa Maria do Herval'),('Santa Maria'),('Santa Rosa'),('Santa Tereza'),('Santa Vitoria do Palmar'),('Santana da Boa Vista'),('Santana do Livramento'),('Santiago'),('Santo Angelo'),('Santo Antonio da Patrulha'),('Santo Antonio das Missoes'),('Santo Antonio do Palma'),('Santo Antonio do Planalto'),('Santo Augusto'),('Santo Cristo'),('Santo Expedito do Sul'),('Sao Borja'),('Sao Domingos do Sul'),('Sao Francisco de Assis'),('Sao Francisco de Paula'),('Sao Gabriel'),('Sao Jeronimo'),('Sao Joao da Urtiga'),('Sao Joao do Polesine'),('Sao Jorge'),('Sao Jose das Missoes'),('Sao Jose do Herval'),('Sao Jose do Hortencio'),('Sao Jose do Inhacora'),('Sao Jose do Norte'),('Sao Jose do Ouro'),('Sao Jose dos Ausentes'),('Sao Leopoldo'),('Sao Lourenco do Sul'),('Sao Luiz Gonzaga'),('Sao Marcos'),('Sao Martinho da Serra'),('Sao Martinho'),('Sao Miguel das Missoes'),('Sao Nicolau'),('Sao Paulo das Missoes'),('Sao Pedro da Serra'),('Sao Pedro do Butia'),('Sao Pedro do Sul'),('Sao Sebastiao do Cai'),('Sao Sepe'),('Sao Valentim do Sul'),('Sao Valentim'),('Sao Valerio do Sul'),('Sao Vendelino'),('Sao Vicente do Sul'),('Sapiranga'),('Sapucaia do Sul'),('Sarandi'),('Seberi'),('Sede Nova'),('Segredo'),('Selbach'),('Senador Salgado Filho'),('Sentinela do Sul'),('Serafina Correa'),('Serio'),('Sertao Santana'),('Sertao'),('Sete de Setembro'),('Severiano de Almeida'),('Silveira Martins'),('Sinimbu'),('Sobradinho'),('Soledade'),('Tabai'),('Tapejara'),('Tapera'),('Tapes'),('Taquara'),('Taquari'),('Taquarucu do Sul'),('Tavares'),('Tenente Portela'),('Terra de Areia'),('Teutonia'),('Tiradentes do Sul'),('Toropi'),('Torres'),('Tramandai'),('Travesseiro'),('Tres Arroios'),('Tres Cachoeiras'),('Tres Coroas'),('Tres Forquilhas'),('Tres Palmeiras'),('Tres Passos'),('Tres de Maio'),('Trindade do Sul'),('Triunfo'),('Tucunduva'),('Tunas'),('Tupanci do Sul'),('Tupancireta'),('Tupandi'),('Tuparendi'),('Turucu'),('Ubiretama'),('Uniao da Serra'),('Unistalda'),('Uruguaiana'),('Vacaria'),('Vale Real'),('Vale Verde'),('Vale do Sol'),('Vanini'),('Venancio Aires'),('Vera Cruz'),('Veranopolis'),('Vespasiano Correa'),('Viadutos'),('Viamao'),('Vicente Dutra'),('Victor Graeff'),('Vila Flores'),('Vila Langaro'),('Vila Maria'),('Vila Nova do Sul'),('Vista Alegre do Prata'),('Vista Alegre'),('Vista Gaucha'),('Vitoria das Missoes'),('Xangri-la');

-- 25/02/2017
-- FEITO EM TODOS
DROP TABLE orcamento;
CREATE TABLE IF NOT EXISTS `orcamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `nome_aniversariante` VARCHAR(255) NULL,
  `idade_aniversariante` INT NULL,
  `data` DATE NULL,
  `num_convidados` INT NULL,
  `onde_encontrou` VARCHAR(100) NULL,
  `obs` MEDIUMTEXT NOT NULL,
  `flag_lido` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
ALTER TABLE `cliente` CHANGE `cpf` `cpf` VARCHAR(14) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;
ALTER TABLE cliente ADD id_cidade INTEGER REFERENCES cidade(id), DROP cidade
DROP TABLE tipo_festa;
DROP TABLE cardapio;
CREATE TABLE complexo (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
	titulo VARCHAR(255),
	descricao TEXT,
	id_imagem INTEGER REFERENCES imagem(id_imagem)
);
CREATE TABLE equipe (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
	titulo VARCHAR(255),
	descricao TEXT,
	id_imagem INTEGER REFERENCES imagem(id_imagem)
);
CREATE TABLE pacote (
	id INTEGER PRIMARY KEY AUTO_INCREMENT, 
	titulo VARCHAR(255),
	descricao TEXT,
	id_imagem INTEGER REFERENCES imagem(id_imagem),
	duracao_festa VARCHAR(45)
);
CREATE TABLE secao (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	descricao TEXT
);
CREATE TABLE item (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	descricao TEXT
);
CREATE TABLE pacote_secao (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	id_pacote INTEGER REFERENCES pacote(id),
	id_secao INTEGER REFERENCES secao(id)
);
CREATE TABLE secao_item (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	id_secao INTEGER REFERENCES secao(id),
	id_item INTEGER REFERENCES item(id)
);

CREATE TABLE calendario (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
	cor_primaria VARCHAR(7),
	cor_secundaria VARCHAR(7),
	data_ini DATE NOT NULL,
	data_fim DATE
);
