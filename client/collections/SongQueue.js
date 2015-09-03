// SongQueue.js - Defines a backbone model class for the song queue.

var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    this.models[0].play();
  }

});