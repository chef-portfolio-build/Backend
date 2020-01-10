const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const expressValidator = require('express-validator');

const posts = require('../routes/posts-router.js');
const authRouter = require('../auth/auth-router');
const authenticate = require('../auth/middleware/auth-middleware');
const bloggerRouter = require('../auth/bloggers/blogger-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use(expressValidator())

server.use(express.static('public'));
// npx apidoc -i src/ -o public/apidocs


server.use('/api/', posts);

server.use('/api/auth', authRouter);
server.use('/api/private', authenticate, bloggerRouter);

server.get('/', (req, res) => {
  res.send("<h2>Let's cook something! 🌽🥕</h2>");
});


module.exports = server;
