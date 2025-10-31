import './style.css'

// Hero image rotation
let currentImage = 1;
const hero1 = document.getElementById('hero1');
const hero2 = document.getElementById('hero2');

function rotateImages() {
  if (currentImage === 1) {
    hero1.classList.remove('active');
    hero2.classList.add('active');
    currentImage = 2;
  } else {
    hero2.classList.remove('active');
    hero1.classList.add('active');
    currentImage = 1;
  }
}

// Rotate images every 5 seconds
setInterval(rotateImages, 5000);

// Email form handling
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showMessage('Por favor ingresa un correo válido', 'error');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage('Por favor ingresa un correo válido', 'error');
    return;
  }

  // Store email in localStorage (for demo purposes)
  // In production, you would send this to a backend service
  const emails = JSON.parse(localStorage.getItem('emails') || '[]');

  if (emails.includes(email)) {
    showMessage('Este correo ya está registrado', 'error');
    return;
  }

  emails.push(email);
  localStorage.setItem('emails', JSON.stringify(emails));

  showMessage('¡Gracias! Te notificaremos pronto', 'success');
  emailInput.value = '';

  // Log to console for demo
  console.log('Email registrado:', email);
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message show ${type}`;

  setTimeout(() => {
    message.classList.remove('show');
  }, 4000);
}
