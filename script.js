// Countdown Timer Code (as per previous setup)
const startDate = new Date("11-12-2024 22:25:00").getTime();
const endDate = new Date("11-12-2024 22:30:00").getTime();
const timerInterval = setInterval(function () {
    const now = new Date().getTime();

    if (now < startDate) {
        const timeLeftToStart = startDate - now;
        const days = Math.floor(timeLeftToStart / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeftToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeftToStart % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeftToStart % (1000 * 60)) / 1000);
        
        let displayTime = "";
        if (days > 0) displayTime += `${days}d `;
        if (hours > 0 || days > 0) displayTime += `${String(hours).padStart(2, '0')}h `;
        if (minutes > 0 || hours > 0 || days > 0) displayTime += `${String(minutes).padStart(2, '0')}m `;
        displayTime += `${String(seconds).padStart(2, '0')}s`;
        document.getElementById("timer").innerText = `Event starts in: ${displayTime}`;
    } else if (now >= startDate && now <= endDate) {
        const timeLeftToEnd = endDate - now;
        const hours = Math.floor((timeLeftToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeftToEnd % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeftToEnd % (1000 * 60)) / 1000);
        
        let displayTime = "";
        if (hours > 0) displayTime += `${String(hours).padStart(2, '0')}h `;
        if (minutes > 0 || hours > 0) displayTime += `${String(minutes).padStart(2, '0')}m `;
        displayTime += `${String(seconds).padStart(2, '0')}s`;
        document.getElementById("timer").innerText = `Time left in event: ${displayTime}`;
    } else {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "The event is over.";
    }
}, 1000);

// Background Music Playlist Code
const playlist = [
    'Running.mp3',  // Replace with your actual audio file paths
    'Running.mp3',
    'Future.mp3'
];

let currentTrack = 0;
const audioElement = document.getElementById('background-music');

// Load the first track from the playlist
audioElement.src = playlist[currentTrack];
audioElement.play();

// Event listener to play the next track in the playlist when the current track ends
audioElement.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;  // Move to the next track or loop to start
    audioElement.src = playlist[currentTrack];
    audioElement.play();
});
