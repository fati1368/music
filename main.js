document.addEventListener("DOMContentLoaded", function () {
  var player = document.getElementById("player");
  var title = document.getElementById("title");
  var artist = document.getElementById("artist");
  var albumImage = document.getElementById("album-image");
  var currentTrack = 0;

  function loadTrack(index) {
    var track = musicData[index];
    title.textContent = track.title;
    artist.textContent = track.artist;
    albumImage.src = track.image;
    player.src = track.url;
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % musicData.length;
    loadTrack(currentTrack);
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + musicData.length) % musicData.length;
    loadTrack(currentTrack);
  }

  document.getElementById("next").addEventListener("click", nextTrack);
  document.getElementById("prev").addEventListener("click", prevTrack);

  loadTrack(currentTrack);
});