const express = require('express');
const app = express();
const port = process.env.PORT || 7052;
const cors = require('cors')
app.use(cors())

const chefRecipe= require('./data/chef-recipe.json');

app.get('/', (req, res) => {
    res.send('Taste Bengal is running')
})

app.get('/chefrecipe', (req, res) => {
    res.send(chefRecipe);
})




app.listen(port, () => {
    console.log(`Taste Bengal is running on port: ${port}`)
})