import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function(){
    var answers = 0;
    for(var i = 0; i < this.get('question.answers.length'); i++){
      answers += 1;
    }
    return answers;
  }),
});
