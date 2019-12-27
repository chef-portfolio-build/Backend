const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const posts = require('../routes/posts-router.js');
const authRouter = require('../auth/auth-router');
const authenticate = require('../auth/middleware/auth-middleware');
const bloggerRouter = require('../auth/bloggers/blogger-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/', posts);

server.use('/api/auth', authRouter)
server.use('/api/user', authenticate, bloggerRouter);

server.get('/', (req, res) => {
  res.send("<h2>It's working</h2>");
});


module.exports = server;
