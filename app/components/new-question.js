import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm(){
      this.set('title', '');
      this.set('author', '');
      this.set('details', '');
      this.set('newQuestion', true);
    },
    submitQuestion(){
      var date = new Date();
      date = date.toString().substring(0,15);
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: date,
        tag: this.get('tag'),
        details: this.get('details'),
        preview: this.get('details').substring(0,100),
      };
      this.set('newQuestion', false);
      this.sendAction('submitQuestion', params);
    }
  }
});
