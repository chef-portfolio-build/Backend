const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./middlewares/auth-middleware');
const authRouter = require('./routes/auth-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

