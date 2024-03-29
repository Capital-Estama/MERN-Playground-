const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);

const JokesRoutes = require('./server/routes/jokes.routes');
JokesRoutes(app);

// Todo: add TimeStamp to all routes
app.listen(8000, () => console.log("server on port 8000"));

//gg
