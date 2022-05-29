const fs = require('fs');
const path = require('path');
const db = require('./../../database/models');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//console.log(products); Te edité este console.log para que no lo traiga en cada cosa pero lo dejo acá por si lo seguís usando más adelante.

const productsController = {
  detail: (req,res) => {
    db.Product.findByPk(req.params.id, 
      {
        include : ['discount']
      })
      .then(product => {
          res.render('./products/detailProduct', { product });
      });
  },
  car: (req,res) => {
    res.render ('./products/productCar')
  },
  addProduct: (req,res) => {
    res.render ('./products/addProduct')
  },
  // Create -  Method to store
	store: (req, res) => {
		const newProduct =  req.body;
    newProduct.category = "Pc de escritorio";
    newProduct.brand = "Intel";
    newProduct.discount = 10;
    newProduct.shipping = "Envío gratis";
    newProduct.monthlyPayment = 12;
		const newProductImage = req.file;
	
		if (req.file && newProductImage.size < 3145728) {
			
    productsController.createNewProduct(newProduct,newProductImage)	
    db.Product
        .create(
          newProduct
        )
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))

	} else if (req.file && newProductImage.size > 3145729) {
		res.send('El archivo es demasiado pesado')
	} else {
		res.send ('No adjuntaste ninguna imagen')
	}
	},
  createNewProduct: function (newProduct,newProductImage) {

		newProduct.price = Number(newProduct.price);
		newProduct.image = newProductImage.filename;
    //TODO: se deben agregar los cambios al formulario
    newProduct.categoryId = 1;
    newProduct.brandId = 1;
    newProduct.discountId = 2;
	},
	asignIdToProduct: function () {
		return products[products.length -1].id +1;
	},
  dbReWrite() { 
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},
  editProduct: (req,res) => {
    db.Product.findByPk(req.params.id, 
      {
        include : ['discount']
      })
      .then(product => {
          res.render('./products/editProduct', { product });
      });

  },
  productCreateForm: (req, res)=> {
    res.render ('./products/productCreateForm')
  },
  products: async (req, res)=> {
    // Sleep for refresh after delete or update
    var waitTill = new Date(new Date().getTime() + 1.5 * 1000);
    while(waitTill > new Date()){}

    const products = await db.Product.findAll();

    res.render ('./products/products',{products})
  },
  // Delete - Delete one product from DB
	deletetProduct: (req, res) => {
    let productId = req.params.id;
    db.Product
    .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
    .then(()=>{
        return res.redirect('/products')})
    .catch(error => res.send(error)) 
	},
  // Update - Method to update
	update: (req, res) => {    
    let productId = req.params.id;
    const editedProduct = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
    };

    if (req.file) {
      editedProduct.image = req.file.filename;
    };
    
    db.Product
    .update(editedProduct,
        {
            where: {id: productId}
        })
    .then(()=> {
        return res.redirect('/products')})            
    .catch(error => res.send(error))
},

}

module.exports = productsController;

