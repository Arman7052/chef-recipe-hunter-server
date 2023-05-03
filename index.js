const express = require('express');
const app = express();
const port = process.env.PORT || 7052;


app.get('/', (req, res) => {
    res.send('Taste Bengal is running')
})








app.listen(port, () => {
    console.log(`Taste Bengal is running on port: ${port}`)
})