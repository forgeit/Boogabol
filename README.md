<h1>Projeto BOOGABOL</h1>
<br>
Projeto feito para o Felipe Gassen e Kelvin Alves (FORGEIT)


>Feito em angular2 com PHP, possui 3 Projetos Base:
>
> * angularSite     (Web Público Angular2)
> * angularAdmin    (Web Administrativo Angular2)
> * server          (Server PHP5.4+)


<h3>Configuração para Desenvolvimento</h3>
1. Instalar NodeJS
2. Instalar AngularCli
3. Instalar PHP5
4. Instalar PHP MySQL
5. Instalar Mysql
6. Após baixar o projeto nas pastas angularAdmin e angularSite deve ser executado o comando:
```
npm install
```
7. Alterar caminho para o Server nos arquivos dos projetos angular /src/environment/environment.*
8. Alterar o $config['base_url'] no arquivo do server /application/config/config.php"
9. Alterar o banco no arquivo do server /application/config/database.php


<h3>Configuração para Produção</h3>
1. Nas pastas angularAdmin e angularSite deve ser executado o comando:
```
npm build --prod
```
2. No projeto angularSite no index.html alterar o base_url para "/web/" e alterar nos caminhos dos .js e .css locais (menos os do angular) adicionando o "/web/"
3. No projeto angularAdmin no index.html alterar o base_url para "/admin/" e alterar nos caminhos dos .js e .css locais (menos os do angular) adicionando o "/admin/"
4. Criar dentro dos projetos angular o .htaccess com o seguinte código:
```
 RewriteEngine On
 RewriteCond %{REQUEST_FILENAME} !-d
 RewriteCond %{REQUEST_FILENAME} !-f
 RewriteRule ^ index.html [L]
```
5. No projeto server alterar o $config['base_url'] no arquivo /application/config/config.php"
6. No projeto server alterar o banco no arquivo /application/config/database.php
