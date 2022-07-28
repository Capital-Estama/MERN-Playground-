// Call joke model
const Jokes = require('../models/jokes.model');

// id, update, options, callback

exports.Create = ( req, res ) => {
  Jokes.create( req.body )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.status(400).json( { message: 'Error Check Request', error: err } ) );
};

exports.Edit = ( req, res ) => {
  Jokes.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.status(400).json( { message: 'Error Check Request', error: err } ) );
}

exports.AllJokes = ( req, res ) => {
  console.log('argument');
	Jokes.find()
		.then((AllJokes) => res.json({ jokes: AllJokes }))
		.catch((err) => res.status(400).json({ message: 'Error Check Request', error: err }));
};

exports.byId = ( req, res ) => {
  Jokes.FindById( { _id: req.params.id } )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.status(400).json( { message: 'Error Check Request', error: err } ) );
};

exports.Delete = ( req, res ) => {
  Jokes.findByIdAndDelete( req.params.id )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.status(400).json( { message: 'Error Check Request', error: err } ) );
}
// Todo: change to Inline function
// module.exports = {  this.Delete, Find, Update ,  ,  };

// res.status(400).json({message: "something went wrong in allJokes", error: err});


    // Jokes.deleteOne({_id:req.params.id})
    


    // app.delete("/api/users/:id", (req, res) => {
    //     // we can get this `id` variable from req.params
    //     const id = req.params.id;
    //     // assuming this id is the index of the users array we can remove the user like so
    //     users.splice(id, 1);
    //     // we always need to respond with something
    //     res.json( { status: "ok" } );
    // });
    
// ...delete 1 document that matches the query object criteria
// User.remove({_id: '5d34d361db64c9267ed91f73'})
//     .then(deletedUser => {
//         // logic (if any) with successfully removed deletedUser object
//     })
//     .catch(err => res.json(err));


// A.findByIdAndRemove(id, options, callback) // executes
// A.findByIdAndRemove(id, options)  // return Query
// A.findByIdAndRemove(id, callback) // executes
// A.findByIdAndRemove(id) // returns Query
// A.findByIdAndRemove()           // returns Query

// A.findByIdAndUpdate(id, update, options, callback) // executes
// A.findByIdAndUpdate(id, update, options)  // returns Query
// A.findByIdAndUpdate(id, update, callback) // executes
// A.findByIdAndUpdate(id, update)           // returns Query
// A.findByIdAndUpdate()                     // returns Query

// This helps prevent accidentally overwriting your document with { name: 'jason bourne' }.

// function getEmployeeByID(req, res){
//     var query  = Employee.where({ _id: req.params.employee_id }); // <-- Use the correct param name
//     query.findOne(function (err, employee) {
//         if (err)
//             return res.send(err)
//         res.json(employee);
//         });
//     };

// module.exports = function(app) {

// // User router instead of app
// router.get('/employees/:employee_id', function(req, res) {
//     getEmployeeByID(req, res); // <-- sending both req and res to the function
// });