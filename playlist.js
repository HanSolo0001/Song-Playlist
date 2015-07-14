function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play(this.nowPlayingIndex);
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop(this.nowPlayingIndex);
};

Playlist.prototype.next = function() {
  this.stop(this.nowPlayingIndex);
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play(this.nowPlayingIndex);
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};
