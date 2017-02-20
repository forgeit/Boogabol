// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:8012/boogabol/server/',
  urlFileUpload: 'fileUpload',
  urlFileView: 'fileView/',

  //Returns
  RET_OK: 'OK',
  RET_ERROR: 'ERROR',
  RET_LOGIN: 'LOGIN',

  //Modules
  module_dashboard: 'dashboard',
  module_buffet: 'buffet',
  module_atracao: 'atracao',
  module_cardapio: 'cardapio',
  module_tipoFesta: 'tipoFesta',
  module_decoracao: 'decoracao',
  module_parceiro: 'parceiro',
  module_cliente: 'cliente',
  module_aniversariante: 'aniversariante',
  module_usuario: 'usuario',
  module_relatorio: 'relatorio',
  module_orcamento: 'orcamento',
  module_newsletter: 'newsletter'
};
