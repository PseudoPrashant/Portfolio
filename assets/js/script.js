/* CUSTOM CURSOR */
const cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
let cursorAnimId;
let isCursorAnimating = false;

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  
  if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1) {
    isCursorAnimating = false;
  } else {
    cursorAnimId = requestAnimationFrame(animRing);
  }
}

document.addEventListener('mousemove', e => {
  mx = e.clientX; 
  my = e.clientY; 
  cur.style.left = mx + 'px'; 
  cur.style.top = my + 'px';
  
  if (!isCursorAnimating) {
    isCursorAnimating = true;
    animRing();
  }
});

document.querySelectorAll('a,button,.flip-card,.highlight-card,.stat,.skill-tags span,.timeline-tags span,.cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* PARTICLE CANVAS */
(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];
  let animId;
  let isVisible = true;

  function resize() {
    W = canvas.width = canvas.parentElement.offsetWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class P {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.r = Math.random() * 1.6 + .4;
      this.a = Math.random() * .5 + .15;
      this.c = Math.random() > .5 ? '79,142,247' : '168,85,247';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.c},${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 110; i++) pts.push(new P());

  function loop() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < pts.length; i++) {
      pts[i].update();
      pts[i].draw();
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(79,142,247,${(1 - d / 110) * .15})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(loop);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible = true;
        loop();
      } else {
        isVisible = false;
        cancelAnimationFrame(animId);
      }
    });
  }, { threshold: 0 });

  const homeSection = document.getElementById('home');
  if (homeSection) observer.observe(homeSection);
})();

/* 3D TILT CARD */
const tiltCard = document.getElementById('tiltCard'), shine = document.getElementById('tiltShine');
if (tiltCard && window.matchMedia('(hover:hover)').matches) {
  tiltCard.addEventListener('mousemove', e => {
    const r = tiltCard.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    tiltCard.style.transform = `perspective(800px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.02)`;
    shine.style.background = `radial-gradient(circle at ${(x + .5) * 100}% ${(y + .5) * 100}%,rgba(255,255,255,.13) 0%,transparent 60%)`;
    shine.style.opacity = '1';
  }, { passive: true });
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
    shine.style.opacity = '0';
  });
}

/* MOBILE MENU */
const menuBtn = document.getElementById('menuBtn'), mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('show'));
document.querySelectorAll('.mobile-menu a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('show')));
document.addEventListener('click', e => { if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) mobileMenu.classList.remove('show') });

/* THEME */
const themeToggle = document.getElementById('themeToggle'), themeIcon = document.getElementById('themeIcon');
function applyTheme(l) {
  if (l) {
    document.body.classList.add('light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.body.classList.remove('light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
}
applyTheme(localStorage.getItem('theme') === 'light');
themeToggle.addEventListener('click', () => {
  const gl = !document.body.classList.contains('light');
  localStorage.setItem('theme', gl ? 'light' : 'dark');
  applyTheme(gl);
});

/* SCROLL PROGRESS */
const prog = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  prog.style.width = (scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
}, { passive: true });

/* BACK TO TOP */
const btt = document.getElementById('back-top');
window.addEventListener('scroll', () => btt.classList.toggle('show', scrollY > 400), { passive: true });

/* NAVBAR ACTIVE */
const sections = document.querySelectorAll('section[id]'), navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let c = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - s.clientHeight / 4) c = s.id });
  navLinks.forEach(l => { l.classList.remove('active'); if (l.getAttribute('href') === '#' + c) l.classList.add('active') });
}, { passive: true });

/* SCROLL REVEAL */
const revEls = document.querySelectorAll('.reveal');
function revealCheck() {
  revEls.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('active') });
}
window.addEventListener('scroll', revealCheck, { passive: true });
revealCheck();

/* SKILL BARS */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
      barObs.unobserve(e.target);
    }
  })
}, { threshold: .3 });
document.querySelectorAll('.skill-category').forEach(el => barObs.observe(el));

/* TYPING */
const typingEl = document.getElementById('typingText');
const words = ['Firmware Developer', 'IoT Engineer', 'Python Developer', 'Embedded Systems'];
let wi = 0, ci = 0, del = false;
function type() {
  const w = words[wi];
  typingEl.textContent = del ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
  del ? ci-- : ci++;
  if (!del && ci === w.length) { del = true; setTimeout(type, 1400); return }
  if (del && ci === 0) { del = false; wi = (wi + 1) % words.length }
  setTimeout(type, del ? 45 : 85);
}
type();
