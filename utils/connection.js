const fs = require('fs');

const dirPath = "./data";
if(!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath);
}

const dataPath = "./data/contacts.json";
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContacts = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

module.exports = { loadContacts };