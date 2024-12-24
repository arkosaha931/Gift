const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

// Create a table to store responses
db.serialize(() => {
    db.run("CREATE TABLE responses (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT)");
});

// Endpoint to save responses
app.post('/responses', (req, res) => {
    const { answer } = req.body;
    db.run("INSERT INTO responses (answer) VALUES (?)", [answer], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send({ id: this.lastID });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});