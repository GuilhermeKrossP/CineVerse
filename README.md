# 🎬 CineVerse

O CineVerse é uma aplicação web desenvolvida com React que permite pesquisar, explorar e descobrir filmes. Utilizando a API do TMDB, o projeto apresenta informações sobre os filmes em uma interface moderna e responsiva.

## ✨ Funcionalidades

- **Filmes populares:** explore os filmes em destaque.
- **Busca por título:** encontre filmes pelo nome.
- **Filtro por gênero:** encontre filmes de acordo com suas preferências.
- **Detalhes dos filmes:** visualize informações, sinopse, avaliação e data de lançamento.
- **Favoritos:** adicione e remova filmes da sua lista pessoal.
- **Salvamento local:** os favoritos permanecem salvos mesmo após atualizar a página.

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- API do TMDB
- LocalStorage

## 🚀 Como executar o projeto

**1. Instale as dependências**

```bash
npm install
```

**2. Configure a API**

Crie uma conta no [TMDB](https://www.themoviedb.org/) e obtenha sua chave de API.

Na pasta principal do projeto, crie o arquivo `.env.local` e adicione:

```env
VITE_TMDB_API_KEY=sua_chave_aqui
```

Substitua `sua_chave_aqui` pela sua chave de API.

**3. Inicie a aplicação**

```bash
npm run dev
```

Depois, acesse o endereço local exibido no terminal.

## 📁 Estrutura do projeto

```text
src/
├── components/
├── hooks/
├── pages/
├── services/
├── App.jsx
├── index.css
└── main.jsx
```

## 🎯 Objetivo

O projeto foi desenvolvido para praticar conhecimentos em React, componentes, Hooks, consumo de APIs e armazenamento de dados no navegador.

## 🎞️ Créditos

Os dados e as imagens dos filmes são fornecidos pelo [The Movie Database (TMDB)](https://www.themoviedb.org/).

Projeto acadêmico desenvolvido para fins de aprendizado.
