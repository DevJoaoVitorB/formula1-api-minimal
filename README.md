# 🏎️ Formula 1 API Minimal - Temporada 2026

Este projeto consiste em uma **API mínima de consulta da temporada 2026 da Fórmula 1**, desenvolvida com **TypeScript, Node.js e Fastify**.

A aplicação foi construída com foco em **consumo de recursos somente leitura (GET)**, oferecendo uma base simples e rápida para integração com frontends, dashboards, estudos de API e projetos educacionais.

Por meio de uma API HTTP enxuta, é possível consultar:

- lista de equipes da temporada 2026
- detalhes de uma equipe por ID
- lista de pilotos da temporada 2026
- detalhes de um piloto por ID

Tudo isso com respostas em JSON, estrutura objetiva e sem dependência de banco de dados.

Este projeto foi desenvolvido como base prática para estudo de **API mínima com Fastify**, priorizando simplicidade, organização de dados em memória e clareza de rotas do curso:

> **Formação Node.js Fundamentals – Módulo VI: Criando APIs com Node.js**  
> Plataforma: [**DIO.me**](https://web.dio.me/)

<br>

## 🚀 Tecnologias Utilizadas

![Stack](https://skillicons.dev/icons?i=nodejs,typescript,fastify)

<br>

## 🎯 Objetivo do Projeto

O objetivo principal é disponibilizar uma API leve e reutilizável para consulta de dados da temporada 2026 da Fórmula 1.

O sistema permite:

- consultar recursos de equipes e pilotos via HTTP GET
- obter coleções completas ou itens individuais por ID
- consumir dados em formato JSON de forma direta
- integrar facilmente com aplicações web, mobile ou scripts

Além disso, o projeto reforça a prática de:

- construção de API REST minimalista com Fastify
- organização modular de dados em arquivos separados
- tipagem estática com TypeScript
- tratamento de erros com respostas HTTP padronizadas

<br>

## 🧱 Estrutura das Funcionalidades

A API foi dividida em recursos independentes, facilitando manutenção e evolução.

### Recurso de Equipes

Responsável por listar equipes e consultar equipe por identificador.

Características:

- endpoint para listar todas as equipes (`GET /teams`)
- endpoint para buscar equipe por ID (`GET /teams/:id`)
- retorno 404 quando a equipe não existe

<br>

### Recurso de Pilotos

Responsável por listar pilotos e consultar piloto por identificador.

Características:

- endpoint para listar todos os pilotos (`GET /drivers`)
- endpoint para buscar piloto por ID (`GET /drivers/:id`)
- retorno 404 quando o piloto não existe

<br>

### Camada HTTP e Tratamento de Rotas

Responsável por exposição das rotas e padronização de respostas.

Características:

- rota raiz de boas-vindas (`GET /`)
- handler global para rota inexistente (`404 Resource not found`)
- CORS habilitado para facilitar consumo por diferentes clientes

<br>

## 📚 Conceitos Praticados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes como:

- API REST com Node.js
- Fastify para criação de servidor HTTP
- TypeScript com tipagem forte
- modelagem simples com dados em memória
- organização por recursos (equipes e pilotos)
- respostas padronizadas em JSON

<br>

## 🔌 Endpoints da API

Rotas disponíveis:

- `GET /` -> mensagem de boas-vindas
- `GET /teams` -> lista completa de equipes
- `GET /teams/:id` -> detalhes de uma equipe por ID
- `GET /drivers` -> lista completa de pilotos
- `GET /drivers/:id` -> detalhes de um piloto por ID

<br>

## 🖥️ Execução do Projeto

Para executar o projeto localmente:

```bash
# clonar o repositório
git clone https://github.com/DevJoaoVitorB/formula1-api-minimal.git

# acessar a pasta do projeto
cd formula1-api-minimal

# instalar dependências
npm install

# executar em desenvolvimento (watch)
npm run dev
```

Para build e execução em produção:

```bash
# gerar build
npm run build

# iniciar versão compilada
npm run start
```

Se desejar alterar porta/host, crie um arquivo `.env` na raiz com:

```env
PORT=3000
HOST=0.0.0.0
```
