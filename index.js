const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors());

const chefs = require('./data/chefs.json')
const categories = require('./data/categories.json')
const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send('Food Bangla is running')
  });


//Chefs data
  app.get('/chefs', (req, res) => {
    res.send(chefs)
  }); 

  //Chefs data by id
  app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.find(c=> c.id == id)
    console.log(selectedChef);
    res.send(selectedChef)
  });

// Recipe data
  app.get('/recipes', (req, res) => {
    res.send(recipes)
  });

// Category data
  app.get('/categories', (req, res) => {
    res.send(categories)
  })

  //Port 
  app.listen(port, () => {
    console.log(`Food Bangla listening on port ${port}`)
  })