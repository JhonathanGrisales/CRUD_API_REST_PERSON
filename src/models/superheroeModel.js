const monggose = require('mongoose');


const superheroSchema = monggose.Schema({
  superheroe: {
    type: String,
    require: true,
    unique: true,
  },
  real_name: {
    type: String,
    require: true,
  },
  features: {
    type: Object,
    require: true,
    skills_superheroe: {
      type: Array,
      require: true,
    },
    universe: {
      type: String,
      require: true,
    },
  },
  enemies: {
    type: Array,
    require: true,
  },
});

module.exports = monggose.model('superheroeCollection', superheroSchema);
