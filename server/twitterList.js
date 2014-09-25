Messages = new Meteor.Collection('messages');

Messages.allow({
	'insert': function (name,message,time) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
  }
});
