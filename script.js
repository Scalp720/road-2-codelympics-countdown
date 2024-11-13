// Set the start and end dates for the countdown
const startDate = new Date("2024-11-14T12:00:00").getTime(); // Start date: November 14, 2024, 12:00 PM
const endDate = new Date("2024-11-15T12:00:00").getTime();   // End date: November 15, 2024, 12:00 PM

// Update the countdown every 1 second
const timerInterval = setInterval(() => {
    const now = new Date().getTime();

    // Check if the current time is before the start date
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
    } 
    // Check if the current time is within the countdown period
    else if (now >= startDate && now < endDate) {
        const timeLeftToEnd = endDate - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor((timeLeftToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeftToEnd % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeftToEnd % (1000 * 60)) / 1000);

        let displayTime = "";
        if (hours > 0) displayTime += `${String(hours).padStart(2, '0')}h `;
        if (minutes > 0 || hours > 0) displayTime += `${String(minutes).padStart(2, '0')}m `;
        displayTime += `${String(seconds).padStart(2, '0')}s`;
        document.getElementById("timer").innerText = `Time left in event: ${displayTime}`;
    } 
    // If the current time is past the end date
    else {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "Times Up Goodluck Everyone!";
    }
}, 1000);

// Background Music Playlist Code
const playlist = [
    'Start Up.mp3',  // Replace with actual audio file paths
    'Running.mp3',
    'Future.mp3'
];

let currentTrack = 0;
const audioElement = document.getElementById('background-music');

// Load the first track from the playlist
if (audioElement) {
    audioElement.src = playlist[currentTrack];
    audioElement.play();

    // Event listener to play the next track in the playlist when the current track ends
    audioElement.addEventListener('ended', () => {
        currentTrack = (currentTrack + 1) % playlist.length;  // Move to the next track or loop to start
        audioElement.src = playlist[currentTrack];
        audioElement.play();
    });
}
