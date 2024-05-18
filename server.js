const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/liff-id', (req, res) => {
    res.json({ liffId: process.env.LIFF_ID });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
