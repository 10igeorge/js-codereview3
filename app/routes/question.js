import Ember from 'ember';

export default Ember.Route.extend({
  savedQuestions: Ember.inject.service(),
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    editQuestion(question, params){
      console.log(question);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('/question/'+question.id);
    },
    submitAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(params);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('/question/'+question.id);
    },
    deleteQuestion(question){
      if(confirm("Delete this question?")){
        var answer_deletions = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function(){
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    deleteAnswer(answer){
      if(confirm("Delete answer?")){
        answer.destroyRecord();
      }
    },
    upvoteAnswer(answer){
      var votes = answer.get('upvotes');
      answer.set('upvotes', votes + 1);
    },
    downvoteAnswer(answer){
      var votes = answer.get('upvotes');
      answer.set('upvotes', votes - 1);
    },
    saveQuestion(question){
      this.get('savedQuestions').save(question);
    },
  }
});
