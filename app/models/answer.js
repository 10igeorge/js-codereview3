import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('question', {async:true}),
  name: DS.attr(),
  date: DS.attr()
});