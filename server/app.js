import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import connDB from './db.config.js';
connDB();

import centerRoutes from './routes/center.routes.js';
app.use('/center', centerRoutes);

import sportRoutes from './routes/sport.routes.js';
app.use('/sport', sportRoutes);

app.listen(
    process.env.PORT ? process.env.PORT : 8080,
    process.env.HOST ? process.env.HOST : '127.0.0.1',
    console.log(
      `listening on http://localhost:${
        process.env.PORT ? process.env.PORT : 8080
      }/`,
    ),
  );