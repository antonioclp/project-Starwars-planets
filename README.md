# Projeto Star Wars DataTable Filters

O Star Wars DataTable Filters é um projeto desenvolvido em JavaScript, React e ContextAPI que tem como objetivo fazer uma requisição a uma API que contém informações sobre os planetas de Star Wars. Nesta aplicação, é possível filtrar os planetas por nome, período de rotação, período orbital, população, gravidade e terreno.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Requisição de API: É feita uma requisição à API que contém os dados dos planetas de Star Wars para obter as informações necessárias.
- Filtragem de planetas: Os planetas podem ser filtrados por nome, período de rotação, período orbital, população, gravidade e terreno, permitindo a exibição apenas dos planetas que atendam aos critérios de filtragem.
- Exibição de dados: Os dados dos planetas são exibidos em uma tabela para facilitar a visualização e a busca de informações específicas.

## Dependências

O projeto possui as seguintes dependências:

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.1"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `start`: Inicia a aplicação em modo de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `test`: Executa os testes utilizando o Jest.
- `test-coverage`: Executa os testes e gera um relatório de cobertura de código.
- `eject`: Remove as dependências encapsuladas e permite a configuração direta da aplicação.

```json
"scripts": {
    "cy": "env CY_CLI=true cypress run",
    "cy:open": "cypress open --e2e --browser chrome",
    "start": "env ESLINT_NO_DEV_ERRORS=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test-coverage": "react-scripts test --coverage --watchAll=false",
    "eject": "react-scripts eject",
    "lint:styles": "npx stylelint '**/*.css'",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js,.jsx"
  }
```

## Como Utilizar

1. Clone o repositório em sua máquina local.
2. No terminal, navegue até a pasta raiz do projeto.
3. Execute o comando `npm install` ou `yarn install` para instalar as dependências.
4. Execute o comando `npm start` ou `yarn start` para iniciar a aplicação em modo de desenvolvimento.
5. Acesse a aplicação no seu navegador através da URL `http://localhost:3000`.
6. Utilize os filtros disponíveis para pesquisar e visualizar os planetas de Star Wars de acordo com os critérios desejados.
