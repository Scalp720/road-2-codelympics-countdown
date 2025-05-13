const startDate = new Date("2025-05-14T12:00:00").getTime();
const endDate = new Date("2025-05-15T12:00:00").getTime();

// Create audio element programmatically
const backgroundMusic = document.getElementById('background-music');

// Function to handle user interaction and start audio
function startAudio() {
  // Play the audio
  backgroundMusic.play().catch(error => {
    console.log("Audio play failed:", error);
    // Add a visible play button as fallback
    createPlayButton();
  });
  
  // Remove the event listeners once played
  document.removeEventListener('click', startAudio);
  document.removeEventListener('keydown', startAudio);
}

// Function to create a visible play button if autoplay fails
function createPlayButton() {
  const playButton = document.createElement('button');
  playButton.innerText = '▶️ Play Music';
  playButton.className = 'play-button';
  playButton.addEventListener('click', () => {
    backgroundMusic.play();
    playButton.style.display = 'none';
  });
  
  document.querySelector('.container').appendChild(playButton);
}

function startTimer() {
  const totalDuration = endDate - startDate;
  const progressCircle = document.querySelector('.progress-circle');
  const timerText = document.getElementById('timer');

  const timerInterval = setInterval(() => {
    const now = new Date().getTime();

    if (now < startDate) {
      const timeLeft = startDate - now;
      updateTimerDisplay(timeLeft);
      updateCircularProgress(timeLeft, totalDuration, progressCircle);
    } else if (now >= startDate && now < endDate) {
      const timeLeft = endDate - now;
      updateTimerDisplay(timeLeft);
      updateCircularProgress(timeLeft, totalDuration, progressCircle);
    } else {
      clearInterval(timerInterval);
      timerText.innerText = "00:00:00";
      progressCircle.style.strokeDashoffset = 0; // Reset the circle
    }
  }, 1000);
}

function updateTimerDisplay(timeLeft) {
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('timer').innerText =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateCircularProgress(timeLeft, totalDuration, progressCircle) {
  const progress = timeLeft / totalDuration;
  const circumference = 2 * Math.PI * 135; // 2 * Math.PI * radius
  const offset = circumference * progress;

  progressCircle.style.strokeDashoffset = offset;
}

// Add event listeners for user interaction
document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);

// Start the timer
startTimer();