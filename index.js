const { MongoClient, ServerSession } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
var cors = require('cors');
const express = require('express');
const path = require('path');
const { log } = require('console');
const uri = "mongodb+srv://argentonik:pe2SXS5YdMmYThoc@clusterpkmn.cpxpx.mongodb.net/?retryWrites=true&w=majority&appName=Clusterpkmn";



const app = express();
app.use(cors());
app.use(express.json())

app.use(express.static(__dirname + '/')); //senno non trova gli altri file compresi i css e le altre pagine html

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(10000, "0.0.0.0", () => {
    console.log("Server partito porta 10000")
})

// Middleware per parsare il corpo delle richieste come JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connessione al server una sola volta
MongoClient.connect(uri)
    .then(client => {
        db = client.db('pkmn');
        console.log('Connesso a MongoDB');
    })
    .catch(error => console.error('Errore nella connessione a MongoDB:', error))
