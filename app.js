const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/routes.js');


app.use(express.static('public'))

app.use('/', router)


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})