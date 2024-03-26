module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          user_uid:{
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          name: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          email: {
              allowNull: false,
              type: Sequelize.STRING,
              unique: true
          },
          password: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          }
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('users');
  },
};
