import Ember from 'ember';

export function bestAnswer(params) {
  console.log(params[0].get('content')); // still needs work
  console.log(params[0].get('content').currentState[0]._data.name); // still needs work
  // for (var i = 0; i < params[0].get('length'); i++) {
  //   var foo = params[0].get('content');
  //   console.log(foo[i].get('answer'));
  // }

  // if(Math.max(params[0])){
  //   return true;
  // }
}

export default Ember.Helper.helper(bestAnswer);
