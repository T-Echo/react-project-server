const express = require('express');
const router = require('./router');
const db = require('./db');
const app = express();

(async () => {
  await db;
  app.use(router);
})()

app.listen(4000,err => {
  if (!err) console.log('服务器连接成功，http://localhost:4000')
  else console.log(err)
})