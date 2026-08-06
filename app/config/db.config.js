module.exports = {
  HOST: "ep-lucky-bonus-axtaj6xd-pooler.c-4.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_HS2EZ8iIznlF",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};