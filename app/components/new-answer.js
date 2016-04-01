import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    showAnswerForm(){
      this.set('name', '');
      this.set('body', '');
      this.set('newAnswerForm', true);
    },
    submitAnswer(){
      var date = new Date();
      date = date.toString().substring(0,15);
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        date: date,
        body: this.get('body')
      };
      this.set('newAnswerForm', false);
      this.sendAction('submitAnswer', params);
    }
  }
});
