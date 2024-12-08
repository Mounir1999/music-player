import React, { useState } from "react";

function App() {
  const [playlistName, setPlaylistName] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = () => {
    if (!playlistName) {
      alert("Playlist name cannot be empty!");
      return;
    }
    const newPlaylist = { name: playlistName, tracks: [...tracks] };
    setPlaylists([...playlists, newPlaylist]);
    setPlaylistName("");
    alert(`Playlist "${playlistName}" created successfully!`);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <input
        type="text"
        placeholder="Enter playlist name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button onClick={createPlaylist}>Create Playlist</button>
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
