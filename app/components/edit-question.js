import Ember from 'ember';

export default Ember.Component.extend({
  newEditQuestionForm: false,
  actions: {
    editQuestionForm(){
      this.set('newEditQuestionForm', true);
    },
    editQuestion(question){
      console.log(question)
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        tag: this.get('tag'),
        details: this.get('details')
      };
      this.set('newEditQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    },
  }
});
