
<div align='center'>

<h1> Pós-graduação | Desenvolvimento Web Full Stack </h1>

<br>

<a href="https://www.linkedin.com/in/mq-soares/">
  <img alt="Miqueias Soares" src="https://img.shields.io/badge/-Miqueias Soares-747d8c?style=flat-square&logo=Linkedin&logoColor=black" />
</a>

<a href="https://twitter.com/mqsoares">
  <img alt="mqSoares" src="https://img.shields.io/badge/-mqsoares-747d8c?style=flat-square&logo=Twitter&logoColor=black" />
</a>

<a href="mailto:mqseraos@gmail.com">
  <img alt="Miqueias Soares" src="https://img.shields.io/badge/-mqseraos@gmail.com-747d8c?style=flat-square&logo=Gmail&logoColor=black" />
</a>

<br>
<br>

Cada disciplina tem uma `Branch`
<br>
Na `Main` fica sempre o material da última disciplina.
<br>
<br>
Disciplina atual na Main: ``Introdução a programação com Scripts``
<br>
<br>
https://mqsoares.github.io/poswebfull/
<br>

<p> ⭐ Sinta-se à vontade para dar estrela a este repositório! </p>
</div>
<br>
<br>

## Descrição

Projeto desenvolvido para servir de apoio e referência para os alunos de pós graduação em Desenvolvimento de Aplicações Web na disciplina de Introdução a programação com scripts

### JSON Server
#### Instalação

```
npm install -g json-server
```

#### Criando a base de dados

Crie um arquivo de nome *db.json* na raiz do projeto.
```json
{
  "alunos": [
    {
      "id": 1,
      "nome": "Laura Eliane Evelyn Gonçalves",
      "matricula": "001",
      "curso": "Sistemas para internet"
    },
    {
      "id": 2,
      "nome": "Murilo Victor Bento Dias",
      "matricula": "002",
      "curso": "Redes"
    },
    {
      "id": 3,
      "nome": "Patrícia Marcela Sara Novaes",
      "matricula": "003",
      "curso": "Sistemas para internet"
    }
  ],
  "disciplinas": [
    {
      "id": 1,
      "nome": "Introdução a progração com scripts",
      "cargaHoraria" : "36h",
      "professor" : "Tiago Daniel Fernando Baptista",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      "id": 2,
      "nome": "Fundamentos da Computação",
      "cargaHoraria" : "60h",
      "professor" : "Marcela Vera Mendes",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      "id": 2,
      "nome": "Linguagens de Marcação",
      "cargaHoraria" : "67h",
      "professor" : "Marcela Vera Mendes",
      "status": "Obrigatória",
      "observacos": "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
      "id": 3,
      "nome": "Português Instrumental",
      "cargaHoraria" : "50h",
      "professor" : "Maitê Analu Carolina Aragão",
      "status": "Opcional",
      "observacos": "Lorem ipsum dolor sit adipisicing elit."
    }
  ]
}
```

#### Iniciando o servidor
Execute o comando para inicar o servidor. Por padrão a API vai funcionar no enderço: http://localhost:3000

```
json-server --watch db.json
```

**Rotas** Aluno:

| Request | URL |  Observações |
|-|-|-|
| **GET** | /alunos | Busca todos os alunos
| **GET** | /alunos/1 | Busca por um aluno
| **POST** | /alunos | Salva um aluno na base de dados
| **PUT** | /alunos/1 | Atualiza os dados do aluno
| **DELETE** | /alunos/1 | Remove um aluno

**Rotas** Disciplina:

| Request | URL |  Observações |
|-|-|-|
| **GET** | /disciplinas | Busca todos as disciplinas
| **GET** | /disciplinas/1 | Busca por uma disciplinas
| **POST** | /disciplinas | Salva uma disciplinas na base de dados
| **PUT** | /disciplinas/1 | Atualiza os dados de uma disciplinas
| **DELETE** | /disciplinas/1 | Remove uma disciplinas


