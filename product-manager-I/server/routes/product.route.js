const Route = require("../controllers/product.controller")

module.exports = app => {

  app.get("/api/products", Route.Products)
  app.get("/api/product/:id", Route.ProductID)
  app.post("/api/products", Route.newProduct)
  app.put("/api/product/:id", Route.Edit)
  app.delete("/api/product/:id", Route.Delete)
}
