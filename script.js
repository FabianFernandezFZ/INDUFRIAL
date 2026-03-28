document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setupPhoneSequence();
  setupBarsAnimation();
  setupCounters();
});

function setupPhoneSequence() {
  const steps = document.querySelectorAll(".phone-step");
  if (!steps.length) return;

  let current = 0;

  setInterval(() => {
    steps[current].classList.remove("is-visible");
    current = (current + 1) % steps.length;
    steps[current].classList.add("is-visible");
  }, 3200);
}

function setupBarsAnimation() {
  const barsContainer = document.querySelector(".data__card");
  if (!barsContainer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".bar").forEach((bar) => bar.classList.add("animate"));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(barsContainer);
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.dataset.counter);
        const duration = 1200;
        const start = performance.now();

        function animate(now) {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(animate);
        observer.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
}
