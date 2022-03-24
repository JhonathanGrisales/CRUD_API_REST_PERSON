const express = require('express');

const superhero_route = express.Router();
const superheroSchema = require('../models/superheroeModel');

/* Create superhero
http://localhost:5000/api/v1/superheroes/superheroe */

superhero_route.post('/superheroe', (req, res) => {
  const superhero = superheroSchema(req.body);

  superhero
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Create superhero
http://localhost:5000/api/v1/superheros */

superhero_route.get('/', (req, res) => {
  superheroSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Create superhero
http://localhost:5000/api/v1/superheroes/:superheroe */

superhero_route.get('/:superheroId', (req, res) => {
  const { superheroId } = req.params;

  superheroSchema
    .findById(superheroId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Create superhero
http://localhost:5000/api/v1/superheroes/:superheroe */

superhero_route.put('/:superheroeId', (req, res) => {
  const { superheroeId } = req.params;
  const {
    superheroe,
    real_name,
    features_superheroe: { skills_superheroe, universe },
    enemies,
  } = req.body;

  superheroSchema
    .updateOne({ _id: superheroeId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Create superhero
http://localhost:5000/api/v1/superheroes/:superheroe */

superhero_route.delete('/:superheroeId', (req, res) => {
  const { superheroeId } = req.params;
  superheroSchema
    .remove({ _id: superheroeId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = superhero_route;
