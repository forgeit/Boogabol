// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  
  serverUrl: 'http://localhost:8012/boogabol/server/',
  urlPublic: 'publico/',
  urlFileView: 'fileView/',

  //Returns
  RET_OK: 'OK',
  RET_ERROR: 'ERROR',
  RET_LOGIN: 'LOGIN'
};
