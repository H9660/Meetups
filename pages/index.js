import express from 'express'
import {createServer} from 'node:http'
import join from 'node:path'
import handleVisit from './api/socket.js'
const app = express();
const server = createServer(app);
app.get('/', handleVisit)
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

