const express = require('express');
const app = express();
const route=require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const PORT =3000;

app.use('/api',route);

app.get("/", (req, res) => {
    res.end("Routing app")
})
app.listen(PORT, ()=> {console.log(`listening on port http://localhost:${PORT}`)})