// Animación de corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  setInterval(createHeart, 300);
  
  // Comportamiento de la carta
  const openBtn = document.querySelector('.open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const triangleTop = document.querySelector('.top');
  const letter = document.querySelector('.letter');
  
  openBtn.addEventListener('click', () => {
    triangleTop.style.display = 'none';
    letter.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  });
  
  closeBtn.addEventListener('click', () => {
    triangleTop.style.display = 'block';
    letter.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
  });
  