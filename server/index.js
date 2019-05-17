const express = require('express');
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const controller = require('./controller');
const {PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
    .then((db)=>{
        console.log(`db is connected`)
        app.set('db', db)
    })
    .catch((err)=>{
        console.log(`Yo bro yo. Your database be whack ${err}`)
    })

app.get('/api/inventory', controller.get);
app.post('/api/inventory', controller.add)

const port = PORT || 4080;

app.listen(port, () => {
    console.log(`App Listening on Port ${port}`)
})
