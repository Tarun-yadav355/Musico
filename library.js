// Sample music data (you can replace this with actual data)
const songs = [
    { id: 1, title: "Tareeka", artist: " Kaur.B", album: "Album 1", file: "songs/2.mp3", cover: "covers/2.jpg" },
    { id: 2, title: "Fight", artist: "Jordan Sandhu", album: "Album 2", file: "songs/8.mp3", cover: "covers/8.jpg" },
    { id: 3, title: "Daaku b puja karde", artist: "Masoom Sharma", album: "Album 3", file: "songs/3.mp3", cover: "covers/3.jpg" },
    // Add more songs as needed
];

// Elements
const musicListElement = document.getElementById('musicList');
const audioPlayer = document.getElementById('audioPlayer');
const songTitleElement = document.getElementById('songTitle');
const searchInput = document.getElementById('search');

// Function to display all songs
function displaySongs(songs) {
    musicListElement.innerHTML = ''; // Clear the list
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('music-item');
        songElement.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <p>${song.title}</p>
            <small>${song.artist}</small>
        `;

        songElement.addEventListener('click', () => playSong(song));
        musicListElement.appendChild(songElement);
    });
}

// Function to play selected song
function playSong(song) {
    document.getElementById('audioSource').src = song.file;
    audioPlayer.load(); // Load the new song
    audioPlayer.play();
    songTitleElement.innerText = `${song.title} - ${song.artist}`;
}

// Search functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    );
    displaySongs(filteredSongs);
});

// Display all songs initially
displaySongs(songs);
