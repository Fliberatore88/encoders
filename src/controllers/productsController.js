const productsController = {
  detalle: (req,res) => {
    res.render('./products/productDetail')
  },
  car: (req,res) => {
    res.render ('./products/productCar')
  }
}

module.exports = productsController;