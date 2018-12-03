const express = require('express');
const router = new express.Router();

router.get('/',(req,res) => {
  res.send('服务器返回的响应')
})

module.exports = router;