module.exports = (sequelize, DataTypes) => {
  cols = {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING
      },
      lastname: {
          type: DataTypes.STRING
      },
      password: {
          type: DataTypes.STRING
      },    
  
      email: {
          type: DataTypes.STRING
  
      },
      rememberMe: {
          type: DataTypes.INTEGER
      },
      image: {
          type: DataTypes.STRING
  
      },    
      CarritoId: {
          type: DataTypes.INTEGER
  
      }
  }
  
  const User = sequelize.define("User", cols,
     {
        tableName: 'users', 
//Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  
//Si no tengo timestamps
     });

  return User;
}


