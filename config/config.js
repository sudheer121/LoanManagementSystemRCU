module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: null,
    database: process.env.DB_NAME || "rcu",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    port : 5432
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: null,
    database: process.env.DB_NAME || "rcu",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    port : 2345 
  },
  production: {
    username: "postgres",
    passwor: null,
    database: "rcu",
    host: "127.0.0.1",
    dialect: "postgres",
    port : 5432 
  }
}
