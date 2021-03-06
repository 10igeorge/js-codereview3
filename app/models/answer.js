import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async:true}),
  body: DS.attr(),
  name: DS.attr(),
  date: DS.attr(),
  upvotes: DS.attr(),
  best: DS.attr()
});
