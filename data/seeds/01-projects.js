
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Become a Super Hero'},
        {id: 2, project_name: 'Become a Super Villian'},
      ]);
    });
};
