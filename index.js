const express = require('express');
const uizard = required('./index_11.js');

const PORT = 3000;

const app = express();

app.post('/uizard', async (req, res) => {
    let call = await uizard.call();
    res.send(call);
});