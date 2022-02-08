const productsController = {
  detalle: (req,res) => {
    res.render('./products/productDetail')
  },
  car: (req,res) => {
    res.render ('./products/productCar')
  },
  addProduct: (req,res) => {
    res.render ('./products/addProduct')
  },
  editProduct: (req,res) => {
    res.render ('./products/editProduct')
  }
}

module.exports = productsController;