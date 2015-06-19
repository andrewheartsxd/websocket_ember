import Ember from 'ember';

export default Ember.Controller.extend({
  //name: function() {
  //  return this.get('nickName');
  //},
  actions: {
    getName: function() {
      this.nickname = this.get('nickName');
      var newName = this.get('nickName');  
      console.log('newName: ' + newName);
      this.setProperties({
        nickName: ''
      });
      //use events instead?
      this.transitionToRoute('chat');
    }
  }
});
