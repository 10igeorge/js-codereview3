import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('about');
  this.route('contact');
  this.route('psychology');
  this.route('entertainment');
  this.route('politics');
  this.route('sports');
  this.route('health');
  this.route('science');
  this.route('beauty');
  this.route('misc');
  this.route('dashboard');
});

export default Router;
