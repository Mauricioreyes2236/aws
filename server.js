const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('Hola Mundo desde AWS');
})

app.listen(3000);
console.log('server is running on port 3000');