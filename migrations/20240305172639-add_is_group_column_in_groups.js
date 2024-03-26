'use strict';

const tableName = 'groups';
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableDefinition = await queryInterface.describeTable(tableName);
    const promises = [];

    return queryInterface.sequelize.transaction((t) => {
      if (!tableDefinition.is_group) {
        promises.push(
          queryInterface.addColumn(tableName, 'is_group', {
            type: Sequelize.TINYINT(1),
            allowNull: true,
            defaultValue: 1,
            after: 'group_uid',
          }, { transaction: t })
        );
      }
      return Promise.all(promises);
    });
  },

  async down (queryInterface, Sequelize){
    return queryInterface.sequelize.transaction(t => Promise.all([
      queryInterface.removeColumn(tableName, 'is_group', { transaction: t }),
    ]));
  }
};
  