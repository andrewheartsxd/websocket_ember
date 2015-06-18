import Ember from 'ember';

export default Ember.Controller.extend({
  messages: null,
  init: function() {
    this._super();
    this.messages = Ember.A();
    var socket = this.get('websockets').socketFor('ws://localhost:7000/');
    socket.on('open', this.myOpenHandler, this);
    socket.on('message', function(event) {
      console.dir(event);
      this.get('messages').pushObject({text: event.data});
    }, this);
    socket.on('close', function(event) {
        console.log('closed');
    }, this);
  },
  //message: '',

  myOpenHandler: function(event) {
    console.log('On open event has been called: ' + event);
  },

  actions: {
    sendMsg: function() {
      var socket = this.get('websockets').socketFor('ws://localhost:7000/');
      var newMsgBody = this.get('newMsgBody');
      var message = {
        nickName: "Andrew",
        msgBody: newMsgBody  
      };
      console.log(message);
      socket.send(JSON.stringify(message));
      this.setProperties({
        newMsgBody: ''
      });
    }
 }
});
