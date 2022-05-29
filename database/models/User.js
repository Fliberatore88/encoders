module.exports = (sequelize, DataTypes) => {
  cols = {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
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
        timestamps: false,  

     });

  return User;
}


