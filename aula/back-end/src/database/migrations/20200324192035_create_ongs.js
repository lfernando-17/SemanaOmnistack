// exports.up = Criar tabelas
exports.up = function(knex) {
  return knex.schema.createTable('ongs',function(table){
  table.string('id').primary();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('city').notNullable();
  table.string('whatsapp').notNullable();
  table.string('uf',2).notNullable();
    }); 
};
// exports.down = Se der erro e desfazer a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
