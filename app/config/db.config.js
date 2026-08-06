module.exports = {
  HOST: "ep-divine-sun-axye8jyd-pooler.c-4.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_tMDdYcJ4s9RO",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};