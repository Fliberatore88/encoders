const productsController = {
  detail: (req,res) => {
    const product = {
    name: "Apple Macbook Pro",
    price: 630.000,
    discount: 1,
    category: "Notebook",
    description: "La nueva MacBook Pro ofrece a los usuarios más pro un rendimiento revolucionario. Elige entre el chip M1 Pro o el aún más potente M1 Max para resolver las tareas profesionales más exigentes con una excepcional duración de la batería(1). Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR de 14 pulgadas y puertos avanzados para sacarle más provecho que nunca",
    id: 1,
    image: "Apple Macbook Pro.jpg"
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

    res.render ('./products/products')
  }

}

module.exports = productsController;