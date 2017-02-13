export class Orcamento {
	constructor (
		public id: number,
		public nome: string,
		public telefone: string,
		public email: string,
		public id_tipo_festa: number,
		public data: string,
		public id_decoracao: number,
		public tema: string,
		public num_convidados: number,
		public obs: string,
		public nome_aniversariante: string,
		public idade_aniversariante: number,
		public onde_encontrou: string	
		){}	
}
