const productsController = {
  detalle: (req,res) => {
    const product = {
    name: "uuuuuuuuuuuuuuu",
    price: 123,
    discount: 1,
    category: "visited",
    description: "sdasdasdasd ",
    id: 18,
    image: "impresora.jpg"
    }
    res.render('./products/productDetail2', {product})
  },
  car: (req,res) => {
    res.render ('./products/productCar')
  },
  addProduct: (req,res) => {
    res.render ('./products/addProduct')
  },
  editProduct: (req,res) => {
    res.render ('./products/editProduct')

  },
  productCreateForm: (req, res)=> {
    res.render ('./products/productCreateForm')


    
  }
}

module.exports = productsController;