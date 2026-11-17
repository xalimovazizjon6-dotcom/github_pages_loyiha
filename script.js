const btn = document.getElementById('greetBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  const vaqt = new Date().toLocaleTimeString('uz-UZ');
  msg.textContent = `Assalomu alaykum! Sayt GitHub Pages’da faol ishlamoqda (${vaqt}).`;
  msg.classList.remove('hidden');
});