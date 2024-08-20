import pkg from "pg";
const { Pool } = pkg;

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: "postgres", // Nome do usuário definido no Docker Compose
  host: "localhost", // O PostgreSQL está rodando localmente
  database: "postgres", // O nome do banco de dados deve corresponder ao nome do banco inicializado
  password: "postgres", // Senha definida no Docker Compose
  port: 5432, // Porta mapeada no Docker Compose
});

export default pool;





