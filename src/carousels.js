/* ============================================================
   CAROUSEL TEMPLATES — behavior
   Pairs with styles/carousels.css. Each block below is a self-
   contained init function for one carousel style. All of them
   look for every instance of their class on the page, so you can
   drop the matching HTML block onto any future project page and
   it just works — no extra wiring needed.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initFadeCarousels();
  initSlideCarousels();
  initScrollCarousels();
  initThumbCarousels();
  initDeckCarousels();
});


/* ----------------------------------------------------------
   1. FADE CROSSFADE
---------------------------------------------------------- */
function initFadeCarousels() {
  document.querySelectorAll('.carousel-fade').forEach(function (root) {
    var slides = Array.from(root.querySelectorAll('.carousel-fade-slide'));
    var prevBtn = root.querySelector('.carousel-fade-prev');
    var nextBtn = root.querySelector('.carousel-fade-next');
    var dotsWrap = root.querySelector('.carousel-fade-dots');
    if (!slides.length) return;

    var index = 0;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.from(dotsWrap.children);

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, si) { s.classList.toggle('is-active', si === index); });
      dots.forEach(function (d, di) { d.classList.toggle('is-active', di === index); });
    }

    prevBtn && prevBtn.addEventListener('click', function () { goTo(index - 1); });
    nextBtn && nextBtn.addEventListener('click', function () { goTo(index + 1); });

    goTo(0);
  });
}


/* ----------------------------------------------------------
   2. SLIDING TRACK
---------------------------------------------------------- */
function initSlideCarousels() {
  document.querySelectorAll('.carousel-slide').forEach(function (root) {
    var track = root.querySelector('.carousel-slide-track');
    var slides = Array.from(root.querySelectorAll('.carousel-slide-slide'));
    var prevBtn = root.querySelector('.carousel-slide-prev');
    var nextBtn = root.querySelector('.carousel-slide-next');
    var dotsWrap = root.querySelector('.carousel-slide-dots');
    if (!track || !slides.length) return;

    var index = 0;

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
    }
    var dots = dotsWrap ? Array.from(dotsWrap.children) : [];

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, di) { d.classList.toggle('is-active', di === index); });
    }

    prevBtn && prevBtn.addEventListener('click', function () { goTo(index - 1); });
    nextBtn && nextBtn.addEventListener('click', function () { goTo(index + 1); });

    goTo(0);
  });
}


/* ----------------------------------------------------------
   3. SCROLL-SNAP FILMSTRIP
---------------------------------------------------------- */
function initScrollCarousels() {
  document.querySelectorAll('.carousel-scroll').forEach(function (root) {
    var track = root.querySelector('.carousel-scroll-track');
    var prevBtn = root.querySelector('.carousel-scroll-prev');
    var nextBtn = root.querySelector('.carousel-scroll-next');
    var firstSlide = root.querySelector('.carousel-scroll-slide');
    if (!track || !firstSlide) return;

    function step(dir) {
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
      var amount = (firstSlide.getBoundingClientRect().width + gap) * dir;
      track.scrollBy({ left: amount, behavior: 'smooth' });
    }

    prevBtn && prevBtn.addEventListener('click', function () { step(-1); });
    nextBtn && nextBtn.addEventListener('click', function () { step(1); });
  });
}


/* ----------------------------------------------------------
   4. THUMBNAIL RAIL
---------------------------------------------------------- */
function initThumbCarousels() {
  document.querySelectorAll('.carousel-thumb').forEach(function (root) {
    var stage = root.querySelector('.carousel-thumb-stage .slide-placeholder span');
    var items = Array.from(root.querySelectorAll('.carousel-thumb-item'));
    if (!stage || !items.length) return;

    function goTo(i) {
      items.forEach(function (item, ii) { item.classList.toggle('is-active', ii === i); });
      stage.textContent = 'Screenshot ' + (i + 1);
    }

    items.forEach(function (item, i) {
      item.addEventListener('click', function () { goTo(i); });
    });

    goTo(0);
  });
}


/* ----------------------------------------------------------
   5. STACKED DECK
---------------------------------------------------------- */
function initDeckCarousels() {
  document.querySelectorAll('.carousel-deck').forEach(function (root) {
    var stack = root.querySelector('.carousel-deck-stack');
    var nextBtn = root.querySelector('.carousel-deck-next');
    var order = Array.from(root.querySelectorAll('.carousel-deck-card'));
    if (!stack || !order.length) return;

    var visible = 4; // how many cards deep the fan shows before fading out

    function layout() {
      order.forEach(function (card, i) {
        var lean = i % 2 === 0 ? 1 : -1;
        card.style.transform =
          'translateY(' + (i * 10) + 'px) scale(' + (1 - i * 0.045) + ') rotate(' + (lean * i * 1.75) + 'deg)';
        card.style.zIndex = order.length - i;
        card.style.opacity = i < visible ? '1' : '0';
      });
    }

    function advance() {
      order.push(order.shift());
      layout();
    }

    order.forEach(function (card) {
      card.addEventListener('click', function () {
        if (order[0] === card) advance();
      });
    });

    nextBtn && nextBtn.addEventListener('click', advance);

    layout();
  });
}
