# Bem vindo!
<h3>Parte Back End</h3>

## Tecnologias utilizadas
- Node.js
- Express
- MongoDB
- Mongoose

## Objetivo do projeto:
  * Criar uma API com o básico do CRUD
    <ul>
      <li>Cadastrar usuário.</li>
      <li>Realizar login.</li>
      <li>Adicionar nova tarefa</li>
      <li>Editar tarefa</li>
      <li>Excluir tarefa</li>
      <li>Buscar todas as tarefas</li>
    </ul>
<br><br><br>

# Instruções para iniciar o projeto
  1 - Clone o repositório
  * Chave SSH
    * git clone git@github.com:GustavoSFer/Coopers-back-end.git

  * Chave HTTPS
    * git clone https://github.com/GustavoSFer/Coopers-back-end.git

  * Entre na pasta do repositório que você acabou de clonar:
    * cd Coopers-back-end

2 - Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install

  
  * Inicialize o banco de dados: 
      ``` npm start```
<br />
<br />
<br />

## Conexão com o Banco: 
Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente.

```sh
DB_URI=bancoDeDados (Opção: Será enviado um por e-mail)
PORT=3001
```

Caso não seja informado, será utilizado por padão `'mongodb://localhost:27017/coopers'`.
onde /coopers é o nome da coleção no banco MongoDB.

**⚠️ IMPORTANTE! ⚠️**


**Este passo é obrigatório**
Crie um arquivo na raiz do projeto de back-end chamado `secret.txt`, e informe uma senha, para que seja usado no token.

Comando que pode utilizar pelo terminal:
```
  * cd back-end
  * touch secret.txt
  * cat > secret.txt
  * segredo
```

## Projeto parte Front-End
https://github.com/GustavoSFer/Coopers-front-end


<br />
<br />
<br />

# Rotas 
* METODO 'GET' -> Buscar tasks e usuários
  * (' / ') -> Tarefas;

  * (' /user ') -> Usuários;

* METODO 'POST' -> Cadastra / Buscar tasks e usuários
  * (' / ') -> Tarefas;

  * (' /status ') -> Busca status 'pendente' ou 'feito';

  * (' /user ') -> Login de usuário;

  * (' /user/create ') -> Cadastro de novo usuário;

* METODO 'DELETE' -> task
  * (' /:id ') -> Remove Tarefa;