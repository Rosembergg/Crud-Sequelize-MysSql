'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mateus Souares',
        ativo: true,
        email: 'mateus@mateus.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Rafael Melo',
        ativo: false,
        email: 'melo@melo.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Romulo souza',
        ativo: true,
        email: 'romulo@romulo.com.br',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
