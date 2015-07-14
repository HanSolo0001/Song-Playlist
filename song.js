function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function(songIndex) {
  this.isPlaying = true;
  document.getElementById("songs").children[songIndex].play();
};

Song.prototype.stop = function(songIndex) {
  this.isPlaying = false;
    document.getElementById("songs").children[songIndex].pause();
};

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
  htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
