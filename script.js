// ---------- Theme Toggle ----------

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('theme');

if (
  savedTheme === 'dark' ||
  (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  themeIcon.textContent = '☀';
  themeToggle.setAttribute('aria-label', 'Switch to light mode');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');

  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  themeIcon.textContent = isDark ? '☀' : '☾';

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
});

// Signature hero element: types out a short rotating "model output"
  const phrases = [
    "AI Engineer building production ML systems.",
    "Turning notebooks into reliable services.",
    "Data pipelines → training → inference → monitoring."
  ];
  const el = document.getElementById('typedOut');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.textContent = phrases[0];
  } else {
    let phraseIndex = 0, charIndex = 0, deleting = false;

    function tick(){
      const current = phrases[phraseIndex];
      if (!deleting){
        charIndex++;
        el.innerHTML = current.slice(0, charIndex) + '<span class="caret"></span>';
        if (charIndex === current.length){
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        el.innerHTML = current.slice(0, charIndex) + '<span class="caret"></span>';
        if (charIndex === 0){
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 28 : 42);
    }
    tick();
  }
