import Ember from 'ember';

export function bestAnswer(params/*, hash*/) {
  var best = Math.max(params[0].get('upvotes'));
  return best;
  console.log(best);
}

export default Ember.Helper.helper(bestAnswer);
