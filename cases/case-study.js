(function () {
  'use strict';

  document.documentElement.classList.add('cs-anim');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    var heroBits = Array.prototype.slice.call(document.querySelectorAll('.cs-hero-inner > *'));
    var wrapBlocks = [];
    Array.prototype.forEach.call(document.querySelectorAll('.cs-wrap > *'), function (el) {
      if (el.classList.contains('cs-metrics')) {
        Array.prototype.forEach.call(el.querySelectorAll('.cs-metric'), function (m) {
          wrapBlocks.push(m);
        });
      } else {
        wrapBlocks.push(el);
      }
    });

    var targets = heroBits.concat(wrapBlocks);
    var seen = new Set();
    targets = targets.filter(function (el) {
      if (!el || seen.has(el)) return false;
      seen.add(el);
      return true;
    });

    if (reduce) {
      targets.forEach(function (t) { t.classList.add('cs-reveal-in'); });
      return;
    }

    targets.forEach(function (el, i) {
      el.style.setProperty('--cs-d', Math.min(i * 0.045, 0.55) + 's');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('cs-reveal-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -12px 0px' });

    targets.forEach(function (t) { io.observe(t); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
