
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Cape'},
        {id: 2, resource_name: 'Cell Phone'},
        {id: 3, resource_name: 'Death Ray'}
      ]);
    });
};