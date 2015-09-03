// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', this.songEnd, this);
    
    this.on('dequeue', function(song) {
      this.removeSong(song);
    }, this);
  },

  playFirst: function() {
    this.models[0].play();
  },

  songEnd: function() {
    this.shift();
    if (this.models.length > 0) {
      this.playFirst();
    }
  },

  removeSong: function(song) {
    this.remove(song);
  }

});