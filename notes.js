// Save a playlist to local storage
function savePlaylist(playlist) {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }
  
  // Retrieve a playlist from local storage
  function getPlaylist() {
    return JSON.parse(localStorage.getItem("playlist"));
  }








  // Select elements
const player = document.querySelector("#player");
const playlist = document.querySelector("#playlist");

// Add event listener to playlist
playlist.addEventListener("click", e => {
  // Get clicked song
  const song = e.target;

  // Update player source and play
  player.src = song.getAttribute("data-src");
  player.play();
});
