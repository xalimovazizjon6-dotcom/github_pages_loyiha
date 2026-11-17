const themeBtn = document.getElementById('themeBtn');
let isPurple = false;

themeBtn.addEventListener('click', () => {
  isPurple = !isPurple;
  document.body.style.background = isPurple
    ? 'linear-gradient(135deg, #2e1065, #4c1d95)'
    : 'linear-gradient(135deg, #0f172a, #1e293b)';
});
