const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { loadContacts } = require('./utils/connection');


const app = express();
const port = 1000;

app.set("views", "views");
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(loadContacts());

app.get('/', (req, res) => {
    const contacts = loadContacts();

    res.render('index', { contacts: contacts });
});

app.get('/add-contact', (req, res) => {
    res.render('add');
});

app.post('/add-contact', (req, res) => {
    const { name, telp } = req.body;
    const contacts = loadContacts();

    contacts.push({ nama: name, no_telepon: telp });
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

    res.redirect('/');
});



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});