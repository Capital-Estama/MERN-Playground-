const express = require("express");
const cors = require("cors");
const app = express();
//const require("./config/mongoose.config");

require("./config/mongoose.config");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// const port = 8000;
app.listen(8000, () => { console.log(` Success! On Port: 8000`)});
require("./routes/product.route")(app);