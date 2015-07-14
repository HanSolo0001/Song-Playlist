var playlist = new Playlist();

var failure = new Song("Failure", "Breaking Benjamin", "3:35");
var angelsFall = new Song("Angels Fall", "Breaking Benjamin", "3:49");

playlist.add(failure);
playlist.add(angelsFall);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}

playlistElement().play();


