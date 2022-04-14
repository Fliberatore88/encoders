
module.exports = (sequelize, DataTypes) => {
    cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },    
    
        price: {
            type: DataTypes.DECIMAL
    
        }, 
        categoryId: {
            type: DataTypes.INTEGER
    
        }, 
    
        brandId:{
            type: DataTypes.INTEGER
    
        }, 
    
        discountId: {
            type: DataTypes.INTEGER
    
        }
    
    }
    
    const Product = sequelize.define("Product", cols,
       {
          tableName: 'product', 
  //Si el nombre de la tabla no coincide con el del modelo
          timestamps: false,  
  //Si no tengo timestamps
       });
  
    return Product;
  }


