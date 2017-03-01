export class Pacote {
	constructor (
		public id: number,
		public titulo: string,
		public descricao: string,
		public id_imagem: number,
		public duracao_festa: string,
		public listSecao: Secao[],
		public listItem: Item[]
		){}	
}

export class Secao {	
	constructor(
		public id: number,
		public descricao: string
		) {
	}
}

export class Item {	
	constructor(
		public id: number,
		public descricao: string
		) {
	}
}