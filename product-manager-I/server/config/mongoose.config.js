const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/product-Manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.")
  })
  .catch(err => {
    console.log("connection Error", err)
  })

//   mongoose.connect('mongodb://localhost/name_of_your_DB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));copy
