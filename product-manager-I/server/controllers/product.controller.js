const Product = require("../model/product.model")

const newProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => {
      res.json(newProduct)
    })
    .catch(err => res.status(400).json({ message: "Err!", error: err })
    )
}

const Edit = (req, res) => {
  Product.Edit({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  })
    .then(product => {
      res.json(product)
    })
    .catch(err => { res.status(400).json({ message: "Err!", error: err })}
    )
}

const Products = (req, res) => {
  Product.find({})
    .then(products => {
      res.json(products)
    })
    .catch(err => res.status(400).json({ message: "Err!", error: err })
    )
}

const ProductID = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(getOne => {
      res.json(getOne)
    })
    .catch(err => { res.status(400).json({ message: "Err!", error: err })}
    )
}

const Delete = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(400).json({ message: "Err!", error: err })}
      )
}


module.exports = {  newProduct, Edit, Products , ProductID, Delete}

// A.where().findOneAndDelete(conditions, options, callback) // executes
// A.where().findOneAndDelete(conditions, options)  // return Query
// A.where().findOneAndDelete(conditions, callback) // executes

// ...delete 1 document that matches the query object criteria
// User.remove({_id: '5d34d361db64c9267ed91f73'})
//     .then(deletedUser => {
//         // logic (if any) with successfully removed deletedUser object
//     })
//     .catch(err => res.json(err));