import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  save(question){
    this.get('questions').pushObject(question);
  },
});
