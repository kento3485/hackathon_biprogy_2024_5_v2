const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/liff-id', (req, res) => {
    res.json({ liffId: process.env.LIFF_ID });
});

app.post('/create-rental', (req, res) => {
    // Logic to create rental
    res.send('募集が作成されました');
});

app.get('/profile', (req, res) => {
    // Logic to fetch profile
    res.json({ name: "ビシェル ロロナ", rating: "★★★★☆", address: "〇〇県〇〇市〇〇町1-2-3" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
