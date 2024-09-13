<div markdown="1">

# Loja da Steam

<br>
Arthur Correa - Desenvolvedor Front-end
<br><br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=0E76A8)](https://www.linkedin.com/in/arthurcorream/)
[![Instagram](https://img.shields.io/badge/Instagram-000?style=for-the-badge&logo=instagram)](https://www.instagram.com/arthurcoorrea/)

Ver: 0.0.1 - Last update: 11/09/2024

<br>

</div>

<div markdown="1">

# Sobre

Projeto consiste em uma loja de itens da steam (Skins) com listagem de items e filtro.
Foi criado um protótipo no Figma e realizado a construção da aplicação utilizando Next.js para o front, Nest.js para o back e banco de dados MongoDB

<br>

# Figma Project
~~~
https://www.figma.com/proto/l1HAjseXJfJeYOqnKkU0O1/Steam-Store?node-id=1-4&t=NEyWMRYsJu0EQEAH-1
~~~

<!-- ## [Clique aqui e veja a aplicação](https://loja-virtual-com-angular.vercel.app) -->

<!-- <img alt="Loja da Steam" src="./readme-img.png" /> -->

<br>

Instalação
---------
A aplicação está dividida em:

- Nest.js (backend - API)
- Next.js (frontend - Web)
- MongoDB (banco de dados)

### Back

Rode o projeto:

~~~
docker compose up
~~~

Acesse o container do nest.js:

~~~
docker compose exec nestjs bash
~~~

Instale as dependências e configure o prisma:

~~~
npm install
npx prisma generate
~~~

Rode o projeto:

~~~
npm run start:dev
~~~


### Front

Instale as dependências:

~~~
npm i
~~~

Rode o Projeto:

~~~
npm run dev
~~~


---------

<br>

Modelagem do Banco
---------
~~~

model Item {
  id                        String        @id @default(auto()) @map("_id") @db.ObjectId
  name                      String
  image                     String
  category                  String
  float                     String?
  price                     Int
  createdAt                 DateTime      @default(now())
  updatedAt                 DateTime      @updatedAt
}


~~~
---------
<br>

Nomenclatura de commits
---------
- docs: apenas mudanças de documentação;
- feat: uma nova funcionalidade;
- fix: a correção de um bug;
- perf: mudança de código focada em melhorar performance;
- refactor: mudança de código que não adiciona uma funcionalidade e também não corrigi um bug;
- style: mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc);
- test: adicionar ou corrigir testes.
---------


Tecnologias Utilizadas:
---------
- Next.js 14
- Nest.js 10
- Node 18.17.1
- HTML
- CSS
- JAVASCRIPT
- TYPESCRIPT
- Git
- SweetAlert2
- MongoDB
- Prisma ORM
- Chakra UI
- Docker
---------