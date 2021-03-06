import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  tag: DS.attr(),
  preview: DS.attr(),
  details: DS.attr(),
  answered: DS.attr(),
  answers: DS.hasMany('answer', {async:true})
});
