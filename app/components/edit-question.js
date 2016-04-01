import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestionForm(){
      this.set('editQuestion', true);
    },
    editQuestion(question){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        tag: this.get('tag'),
        details: this.get('details'),
        preview: this.get('details').substring(0,100)
      };
      this.set('editQuestion', false);
      this.sendAction('editQuestionForm', question, params);
    }
  }
});
