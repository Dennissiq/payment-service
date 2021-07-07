import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME_PAYMENT_SERVICE,
  process.env.DB_USER_PAYMENT_SERVICE,
  process.env.DB_PASS_PAYMENT_SERVICE,
  {
    host: process.env.DB_HOST_PAYMENT_SERVICE,
    dialect: 'postgres',
  }
);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
