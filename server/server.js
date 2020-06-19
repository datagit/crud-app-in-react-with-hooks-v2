const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    // The server needs to respond with CORS headers on the options call. If you are using nodejs/express, you can fix this for all endpoints with:
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const faker = require('faker');
// https://github.com/marak/Faker.js/
var users = [...Array(20)].map((x, i) => {
    return {
        id: ++i,
        name: faker.name.findName(),
        username: faker.internet.userName(),
    };
});

// get method
app.get('/api/users', (req, res) => {
    const metadata = { total_count: users.length};
    res.json({ _metadata: metadata, records: users });
});

// post method
app.post('/api/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users = [...users, user];
    res.json(user);
});

app.listen(3001, () => {
    console.log('App started on port 3001');
});