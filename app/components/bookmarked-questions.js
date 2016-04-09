import Ember from 'ember';

export default Ember.Component.extend({
  savedQuestions: Ember.inject.service(),
  actions: {
    remove(question){
      this.get('savedQuestions').remove(question);
    }
  }
});
