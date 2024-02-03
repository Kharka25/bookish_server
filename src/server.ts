import express, { Express } from 'express';
import 'dotenv/config';
import AppDataSource from '@db';

const server: Express = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

AppDataSource.initialize()
  .then(() => {
    console.log('Data source initialized');
  })
  .catch((err) => {
    throw new Error(`Error initializing Data source: ${err}`);
  });

server.post('/api/v1/users/auth/signup', (req, res) => {
  res.send();
});

export default server;
