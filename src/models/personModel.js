const monggose = require('mongoose');

const personSchema = monggose.Schema({
  client_name: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: Object,
    require: true,
    city: {
      type: String,
      require: true,
    },
    code_zip: {
      type: String,
      require: true,
    },
    geo: {
      type: Object,
      require: true,
      lat: {
        type: Number,
        require: true,
      },
      long: {
        type: Number,
        require: true,
      },
    },
  },
  contact: {
    type: Object,
    require: true,
    email: {
      type: String,
      require: true,
    },
    cellphone: {
      type: String,
      require: true,
    },
  },
});

module.exports = monggose.model('personCollection', personSchema);
