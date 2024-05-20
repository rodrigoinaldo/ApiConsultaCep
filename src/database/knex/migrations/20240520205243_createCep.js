/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('salvarcep', (table) => {
        table.increments('id')
        table.text('logadouro')
        table.text('bairro')
        table.text('localidade')
        table.text('uf')
        table.text('cep')
        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
        table.timestamp('updated_at')
            .defaultTo(knex.fn.now())
    
      }).then(() => {
        console.log('Criado tabela de usuarios')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('salvarcep').then(() => {
        console.log('Deletado tabela de salvarcep')
    })
};
