import Ember from 'ember';

export function bestAnswer(params) {
  console.log(params[0]);
  // for (var i = 0; i < params[0].get('length'); i++) {
  //   var foo = params[0].get('content');
  // }
  //
  // if(Math.max(params[0])){
  //   return true;
  // }
}

export default Ember.Helper.helper(bestAnswer);
