const productsController = {
  detail: (req,res) => {
    const product = {
    name: "Apple Macbook Pro",
    price: 630.000,
    discount: 1,
    category: "Notebook",
    description: "Nuevo Procesador de 6 núcleos a 2,6 GHz y512",
    id: 1,
    image: "impresora.jpg"
    }
    res.render('./products/detailProduct', {product})
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
  },
  products: (req, res)=> {
    console.log(req)
    res.render ('./products/products')
  }

}

module.exports = productsController;