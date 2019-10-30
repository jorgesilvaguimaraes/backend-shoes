module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'shoes',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
