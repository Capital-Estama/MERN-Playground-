// Call the controllers
const Route = require( '../controllers/jokes.controller' );


module.exports = ( app ) => {
  app.post( '/api/jokes/new', Route.Create );
  app.put( '/api/jokes/update/:_id', Route.Edit );
  app.get( '/api/jokes/', Route.AllJokes );
  app.get( '/api/jokes/:_id', Route.byId );
  app.delete( '/api/jokes/delete/:_id', Route.Delete );
};
