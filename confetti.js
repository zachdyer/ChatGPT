const createConfetti = () => {
  // Create a confetti element
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDelay = `${Math.random() * 5}s`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}deg, 100%, 50%)`;
  confetti.style.animationDuration = `${Math.random() * 10 + 5}s`;
  document.body.appendChild(confetti);

  // Remove the confetti element after the animation is complete
  confetti.addEventListener('animationend', () => {
    confetti.remove();
  });
};

// Generate confetti at regular intervals
setInterval(createConfetti, 100);
