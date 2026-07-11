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
