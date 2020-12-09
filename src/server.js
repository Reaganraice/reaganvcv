const express = require('express');
const port = prcess.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get('/.*/', (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))