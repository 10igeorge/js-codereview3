import Ember from 'ember';

export default Ember.Component.extend({
  bestAnswer: Ember.computed('answer.upvotes', function(){
    console.log(this.get('answer.upvotes'));
    var highest = Math.max('answer.upvotes');
    return highest;
  }),
});

//can computed prop be used in route?
