module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define("channel", {
      name: {
         type: DataTypes.STRING,
      },
      public:{
        type: DataTypes.BOOLEAN
      }
    });
  
    Channel.associate =  (models) => {
        // 1:M
        Channel.belongsTo(models.Team,{
            foreignKey: 'teamId'
        });
        // N:M
        Channel.belongsToMany(models.User,{
            through: 'channel_member',
            foreignKey: 'channel_id'
        });
        
    };
  
    return Channel;
  };