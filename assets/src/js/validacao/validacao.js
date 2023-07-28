
export class Cliente {
  constructor(nome, email, senha) {
    this._nome = nome;
    this._email = email;
    this._senha = senha;
  }

  // Getters e Setters
  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  get email() {
    return this._email;
  }

  set email(novoEmail) {
    this._email = novoEmail;
  }

  get senha() {
    return this._senha;
  }

  set senha(novaSenha) {
    this._senha = novaSenha;
  }
}

const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'seu_usuario', // Usuário do banco de dados
  password: 'sua_senha', // Senha do banco de dados
  host: 'localhost', // Endereço do servidor PostgreSQL
  database: 'nome_do_banco', // Nome do banco de dados
  port: 5432 // Porta do servidor PostgreSQL (por padrão, é 5432)
});

// Conexão com o banco de dados
pool.connect((err, client, done) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');

  // Exemplo de consulta ao banco de dados
  client.query('SELECT * FROM tabela', (err, result) => {
    done(); // Libera o cliente para o pool
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return;
    }
    console.log('Resultados da consulta:', result.rows);
  });
});
