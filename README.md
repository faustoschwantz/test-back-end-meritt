# Teste Back-end Developer

- [Descrição](#Descrição)
  - [Observações](#Observações)
  - [Sobre o Nest.js](#Sobre-o-Nest.js)
  - [Tecnologias](#Tecnologias)
- [Instalação](#Instalação)
- [Scripts](#NPM-Scripts)
- [Docker](#Docker-Compose-Comandos)
- [API](#API)
- [Endpoints](#Endpoints)



## Descrição

Teste para vaga de [Back-End Developer](https://github.com/Meritts/test-back-end-meritt) na Meritt.</br>
Conforme as especificações do teste, foi desenvolvido uma API REST para realizar operações de CRUD de provas e questões.

## Observações
O endpoint GET /exams/:id/questions foi desenvolvido conforme o requisito funcional para obter as opções das questões de uma prova em ordem aleatória. Este endpoint retorna as questões e suas opções em ordem aleatória, com objetivo de gerar provas com questões e opções com diferentes ordens.


## Sobre o Nest.js
Devido ao Nest.js ser um framework de alto nível ele abstrai e facilita o uso de alguns recursos, dentre eles pode-se citar a estrutura do projeto dividida em módulos, o uso de decorators para expor endpoints, o modo como realiza injeção de dependência com decorators e providers, o tratamento de erros e logs, a integrações com outras tecnologias, como OpenAPI/Swagger, TypeORM, Jest, class-validator, class-transform. Entre outras integrações e abstrações que ainda não consegui testar.

## Tecnologias
* Node.js
* Nest.js
* TypeScript
* PostgreSQL
* TypeORM
* Git/GitHub
* Heroku
* Docker/Docker Compose
* OpenAPI/Swagger
* Jest


## Instalação

```bash
# instala as dependências do projeto
$ npm install
```

## NPM Scripts
Scripts úteis para desenvolvimento, teste, compilação e produção.

```bash
# roda os testes unitários
$ npm run test

# visualiza a cobertura de testes
$ npm run test:cov

# roda a API em desenvolvimento
$ npm run start

# roda a API em desenvolvimento com reload da aplicação
$ npm run start:dev

# roda a API em desenvolvimento com debug e reload da aplicação
$ npm run start:debug

# roda a API em produção no heroku (executa as migrações e inicia a aplicação)
$ npm run start:heroku

# executa o CLI do typeorm (necessário para arquivos .ts)
$ npm run typeorm

# compila a API
$ npm run build

# executa em produção
$ npm run start:prod
```

## Docker Compose Comandos
Comandos para rodar a API no Docker. Nos serviços, api-development e api-production, o banco dados é iniciado automaticamente e as migrações são rodadas antes de subir a aplicação.
```bash
# roda a aplicação para desenvolvimento (--watch, --debug) e inicia o banco de dados.
$ docker-compose up api-development

# roda a aplicação simulando o ambiente de produção (compila os arquivos para JS) e inicia o banco de dados.
$ docker-compose up api-production

# inicia o banco de dados
$ docker-compose up database
```

## API
HOST: https://back-end-meritt.herokuapp.com/

DOCS: http://back-end-meritt.herokuapp.com/api/


## Endpoints
A documentação completa da API, com os endpoints, requests e responses estão disponíveis na [documentação](http://back-end-meritt.herokuapp.com/api/).

|Métodos|Endpoint|Ação|
|-------|--------|----|
POST | /exams | Salva uma prova
GET | /exams | Retorna todas as provas
GET | /exams/:id | Retorna uma prova
PUT | /exams/:id | Atualiza uma prova
DELETE | /exams/:id | Exclui uma prova
POST | /exams/:id/questions | Salva uma questão para uma prova
GET | /exams/:id/questions | Retorna todos as questões de uma prova
GET | /questions/:id | Retorna uma questão
PUT | /questions/:id | Atualiza uma questão
DELETE | /questions/:id | Exclui uma questão
POST | /questions/:id/options | Salva uma opção/alternativa para uma questão
GET | /questions/:id/options | Retorna todas as opções de uma questão
GET | /options/:id | Retorna uma opção
PUT | /options/:id | Atualiza uma opção
DELETE | /options/:id | Exclui uma opção
