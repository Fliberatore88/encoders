const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//console.log(products); Te edité este console.log para que no lo traiga en cada cosa pero lo dejo acá por si lo seguís usando más adelante.

const productsController = {
  detail: (req,res) => {
    const idToFind = req.params.id
		const product = products.find ( p =>  p.id == idToFind )
		
		return res.render ('./products/detailProduct', { product })
  },
  car: (req,res) => {
    res.render ('./products/productCar')
  },
  addProduct: (req,res) => {
    res.render ('./products/addProduct')
  },
  // Create -  Method to store
	store: (req, res) => {
    console.log('producto agr', req.body);
		const newProduct =  req.body;
    newProduct.category = "Pc de escritorio";
    newProduct.brand = "Intel";
    newProduct.discount = 10;
    newProduct.shipping = "Envío gratis";
    newProduct.monthly_payments = 12;
		const newProductImage = req.file;
	
		if (req.file && newProductImage.size < 3145728) {
			
    productsController.createNewProduct(newProduct,newProductImage)	
		
		products.push (newProduct)

		productsController.dbReWrite()

		res.redirect ('/products')

	} else if (req.file && newProductImage.size > 3145729) {
		res.send('El archivo es demasiado pesado')
	} else {
		res.send ('No adjuntaste ninguna imagen')
	}
	},
  createNewProduct: function (newProduct,newProductImage) {

		newProduct.id = productsController.asignIdToProduct();
		newProduct.price = Number(newProduct.price);
		newProduct.image = newProductImage.filename;
		
		if (newProduct.discount == '') {
			newProduct.discount = 0
		} else {
			newProduct.discount = Number(newProduct.discount)
		}
	},
	asignIdToProduct: function () {
		return products[products.length -1].id +1;
	},
  dbReWrite() { 
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},
  editProduct: (req,res) => {
    const idToFind = req.params.id
		const product = products.find ( p =>  p.id == idToFind )
		
		return res.render ('./products/editProduct', {product})

  },
  productCreateForm: (req, res)=> {
    res.render ('./products/productCreateForm')
  },
  products: (req, res)=> {
    // Sleep for refresh after delete or update
    var waitTill = new Date(new Date().getTime() + 1.5 * 1000);
    while(waitTill > new Date()){}

    res.render ('./products/products',{products})
  },
  // Delete - Delete one product from DB
	deletetProduct: (req, res) => {
		const idToFind = req.params.id
		const deletedProducts = products.filter ( p =>  p.id != idToFind )
		
		fs.writeFileSync(productsFilePath, JSON.stringify(deletedProducts, null, 2))
		
    // await new Promise(resolve => setTimeout(resolve, 50));
    res.redirect('/products')
	},
  // Update - Method to update
	update: (req, res) => {
		
    const idToFind = req.params.id
    const productIndex = products.findIndex(product => product.id == idToFind )
    const editedProduct = req.body;

    products[productIndex].name = editedProduct.name;
    products[productIndex].description = editedProduct.description;
    products[productIndex].price = Number(editedProduct.price);
 
    if (req.file) {
    products[productIndex].image = req.file.filename;
    }
    productsController.dbReWrite()

  return res.redirect('/products')
},

}

module.exports = productsController;