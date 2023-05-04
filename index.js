const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())

const chefRecipe= require('./data/chef-recipe.json');

app.get('/', (req, res) => {
    res.send('Taste Bengal is running')
})

app.get('/chefrecipe', (req, res) => {
    res.send(chefRecipe);
})

app.get('/chefrecipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const viewRecipes = chefRecipe.find(n => n.id == id);
    res.send(viewRecipes)
})


app.listen(port, () => {
    console.log(`Taste Bengal is running on port: ${port}`)
})