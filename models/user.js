module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      username: {
         type: DataTypes.STRING,
         unique: true
      },
      email: {
         type: DataTypes.STRING,
         unique: true
      },
      password: {
         type: DataTypes.STRING,
      }
    });
  
    User.associate =  (models) => {
        User.belongsToMany(models.Team,{
            through:'member',
            foreignKey: 'UserId'
        });
        User.belongsToMany(models.Channel,{
            through:'channel_member',
            foreignKey: 'UserId'
        });
    };
  
    return User;
  };