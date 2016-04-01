import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async:true}),
  body: DS.attr(),
  name: DS.attr(),
  upvotes: DS.attr()
});
