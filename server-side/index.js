const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1,name: 'Shihan', email: 'shihan@moni.com'},
    {id: 2,name: 'Moni', email: 'moni@shihan.com'},
    {id: 3,name: 'Tini', email: 'tini@shihanMoni.com'},
];

app.get('/', (req, res) => res.send('Bismillahir Rahmanir Rahim. - ML-11-Module-67'));
app.get('/users', (req, res) => res.send(users));
app.post('/users', (req, res) => {
    console.log('I am posting....', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port, () => console.log(`Server is running from  port: ${port}`));