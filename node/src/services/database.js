const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/arqueologiaBiblica', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});