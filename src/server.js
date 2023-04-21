import {data} from "./data.js";

const express = require('express')
//var cors = require('cors');
const app = express()
const port = 5000

//app.use(cors());


app.get('/hello', (req, res) =>
{
    res.send('Hello World!');
})

app.get('/data', (req, res) =>
{
    res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})