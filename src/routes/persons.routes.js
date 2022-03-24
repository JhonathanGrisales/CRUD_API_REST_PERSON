const express = require('express');

const person_route = express.Router();
const personSchema = require('../models/personModel');

/* Create person
http://localhost:5000/api/v1/persons/person */

person_route.post('/person', (req, res) => {
  const person = personSchema(req.body);

  person
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Get Person by id
http://localhost:5000/api/v1/persons/:id */

person_route.get('/:personId', (req, res) => {
  const { personId } = req.params;

  personSchema
    .findById(personId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Get all persons
http://localhost:5000/api/v1/persons */

person_route.get('/', (req, res) => {
  personSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Update person by id
http://localhost:5000/api/v1/persons/:id */

person_route.put('/:personId', (req, res) => {
  const { personId } = req.params;
  const {
    client_name,
    address: [
      {
        city,
        code_zip,
        geo: [{ lat, long }],
      },
    ],
    contact: [{ email, cellphone }],
  } = req.body;

  personSchema
    .updateOne(
      { _id: personId },
      {
        $set: {
          client_name,
          address: { city, code_zip, geo: { lat, long } },
          contact: { email, cellphone },
        },
      }
    )
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Delete Person By id
http://localhost:5000/api/v1/persons/:id */

person_route.delete('/:personId', (req, res) => {
  const { personId } = req.params;
  personSchema
    .remove({ _id: personId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = person_route;
