
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Save people.', project_id: 1},
        {id: 2, task_description: 'Take selfies.', project_id: 1},
        {id: 3, task_description: 'Fight all that is good.', project_id: 2}
      ]);
    });
};