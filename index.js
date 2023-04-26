const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./categories.json');
const cros = require('cors')

app.use(cros())


app.get('/',(req, res)=>{
    res.send('Drogon is running');
});

app.get('/categories',(req, res)=>{
    console.log(categories);
    res.send(categories);
});

app.listen(port, ()=>{
    console.log(`Drogon API is running on port ${port}`)
})