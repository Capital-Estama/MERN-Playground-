const mongoose = require("mongoose")

// Todo: add TimeStamp to the schema
const ProductSchema = new mongoose.Schema(
  {
      title: {
        type: String,
        required: [true, "Product title is needed"],
        minlength: [3, "Product title must be at least 3 characters long"]
      },
      price: {
        type: Number,
        required: [true, "Product price is needed"],
        min: [1, "Product price must be at least 1"]
      },
      description: {
        type: String,
        required: [true, "Product description is needed"],
        minlength: [3, "Product description must be at least 3 characters long"]
      }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model("Product", ProductSchema)


module.exports = Product


// const UserSchema = new mongoose.Schema({
//   name: { type: String },
//   age: { type: Number }
//  }, { timestamps: true })
//  // create a constructor function for our model and store in variable 'User'
//  const User = mongoose.model('User', UserSchema);