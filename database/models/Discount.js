module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    };

    const Discount = sequelize.define("Discount", cols, {
        tableName: 'discounts', 
//Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  
//Si no tengo timestamps
     });

    Discount.associate = function(models) {
        Discount.hasMany(models.Product, { // models.products -> Movie es el valor de alias en movie.js
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "discountId"
        })
    }

    return Discount
};