const header = document.querySelector("[data-header]");
const stickyCta = document.querySelector("[data-sticky-cta]");
const menu = document.querySelector("[data-menu]");
const openMenu = document.querySelector("[data-menu-open]");
const closeMenu = document.querySelector("[data-menu-close]");

let lastScrollY = window.scrollY;
let chromeFrame = 0;

function updateChrome() {
  const y = window.scrollY;
  header?.classList.toggle("is-scrolled", y > 60);

  if (window.innerWidth < 981) {
    header?.classList.toggle("is-hidden", y > 180 && y > lastScrollY);
  } else {
    header?.classList.remove("is-hidden");
  }

  stickyCta?.classList.toggle("is-visible", y > Math.max(420, window.innerHeight * 0.45));
  lastScrollY = y;
}

function scheduleChromeUpdate() {
  if (chromeFrame) return;
  chromeFrame = window.requestAnimationFrame(() => {
    chromeFrame = 0;
    updateChrome();
  });
}

window.addEventListener("scroll", scheduleChromeUpdate, { passive: true });
window.addEventListener("resize", scheduleChromeUpdate, { passive: true });
updateChrome();

openMenu?.addEventListener("click", () => {
  if (!menu) return;
  menu.showModal();
  document.body.classList.add("is-locked");
  openMenu.setAttribute("aria-expanded", "true");
});

closeMenu?.addEventListener("click", () => {
  menu?.close();
});

menu?.addEventListener("close", () => {
  document.body.classList.remove("is-locked");
  openMenu?.setAttribute("aria-expanded", "false");
});

menu?.addEventListener("click", (event) => {
  if (event.target === menu) menu.close();
});

const allowPointerGlow = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (allowPointerGlow) {
  document.querySelectorAll("a.card").forEach((card) => {
    let frame = 0;
    let x = 0;
    let y = 0;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    }, { passive: true });
  });
}

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open || window.innerWidth > 760) return;
    document.querySelectorAll(".faq-list details[open]").forEach((other) => {
      if (other !== detail) other.removeAttribute("open");
    });
  });
});

const quiz = document.querySelector("[data-quiz]");
if (quiz) {
  const steps = Array.from(quiz.querySelectorAll("[data-step]"));
  const label = quiz.querySelector("[data-step-label]");
  const bar = quiz.querySelector("[data-progress-bar]");
  const form = quiz.querySelector("[data-quiz-form]");
  let currentStep = 1;

  const showStep = (nextStep) => {
    currentStep = Math.min(Math.max(nextStep, 1), steps.length);
    steps.forEach((step) => {
      step.classList.toggle("is-active", Number(step.dataset.step) === currentStep);
    });
    if (label) label.textContent = `Step ${currentStep} of ${steps.length}`;
    if (bar) bar.style.width = `${(currentStep / steps.length) * 100}%`;
  };

  quiz.querySelectorAll("[data-field]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.field;
      const value = button.dataset.value;
      const input = form?.elements.namedItem(field);
      if (input) input.value = value;

      button.parentElement?.querySelectorAll("button").forEach((item) => {
        item.classList.toggle("is-selected", item === button);
      });

      window.setTimeout(() => showStep(currentStep + 1), 260);
    });
  });

  showStep(1);
}


// Design System V6 interaction layer: progressive enhancement, no dependencies.
const announcement = document.querySelector('.announcement-bar');
if (announcement) {
  const key = 'inquiry-removal-announcement-dismissed';
  const dismiss = announcement.querySelector('[data-announcement-dismiss]');
  if (sessionStorage.getItem(key) === 'true') announcement.classList.add('is-dismissed');
  dismiss?.addEventListener('click', () => { announcement.classList.add('is-dismissed'); sessionStorage.setItem(key, 'true'); });
}

const scrollTopButton = document.querySelector('[data-scroll-top]');
function updateScrollTop() { scrollTopButton?.classList.toggle('is-visible', window.scrollY > 700); }
window.addEventListener('scroll', updateScrollTop, { passive: true });
scrollTopButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
updateScrollTop();

const inlineCtas = Array.from(document.querySelectorAll('.ds-hero-primary, .final-cta'));
if (stickyCta && inlineCtas.length && 'IntersectionObserver' in window) {
  const visible = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    stickyCta.classList.toggle('is-suppressed', visible.size > 0);
  }, { threshold: 0.18 });
  inlineCtas.forEach((cta) => io.observe(cta));
}

const wizard = document.querySelector('[data-wizard]');
if (wizard) {
  const panels = Array.from(wizard.querySelectorAll('[data-wizard-step]'));
  const back = wizard.querySelector('[data-wizard-back]');
  const next = wizard.querySelector('[data-wizard-next]');
  const label = wizard.querySelector('[data-wizard-label]');
  const track = wizard.querySelector('[data-wizard-track]');
  const bar = wizard.querySelector('[data-wizard-bar]');
  let index = 0;
  function renderWizard() {
    panels.forEach((panel, i) => panel.toggleAttribute('hidden', i !== index));
    if (label) label.textContent = `Step ${index + 1} of ${panels.length}`;
    if (bar) bar.style.width = `${((index + 1) / panels.length) * 100}%`;
    track?.setAttribute('aria-valuenow', String(index + 1));
    if (back) back.disabled = index === 0;
    if (next) next.textContent = index === panels.length - 1 ? 'Review Details' : 'Next';
  }
  back?.addEventListener('click', () => { index = Math.max(0, index - 1); renderWizard(); });
  next?.addEventListener('click', () => { index = Math.min(panels.length - 1, index + 1); renderWizard(); panels[index]?.scrollIntoView({behavior:'smooth', block:'start'}); });
  wizard.querySelectorAll('[data-choice]').forEach((choice) => {
    const choose = () => { choice.parentElement?.querySelectorAll('[data-choice]').forEach((c) => c.classList.remove('is-selected')); choice.classList.add('is-selected'); };
    choice.addEventListener('click', choose);
    choice.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(); } });
  });
  const stageForm = wizard.querySelector('[data-lead-form]');
  stageForm?.querySelectorAll('input').forEach((input) => {
    input.addEventListener('blur', () => {
      const error = input.closest('.ds-field')?.querySelector('.ds-error');
      if (!error) return;
      if (input.checkValidity()) { error.textContent = ''; return; }
      if (input.type === 'email') error.textContent = 'Please enter a valid email address.';
      else if (input.type === 'tel') error.textContent = 'Please enter a valid phone number, or leave this optional field blank.';
      else error.textContent = 'Please complete this required field.';
    });
  });
  stageForm?.addEventListener('submit', (event) => { event.preventDefault(); stageForm.querySelectorAll('input').forEach((input) => { if (!input.checkValidity()) input.reportValidity(); }); });
  renderWizard();
}

const tocLinks = Array.from(document.querySelectorAll('.ds-toc a[href^="#"]'));
if (tocLinks.length && 'IntersectionObserver' in window) {
  const sections = tocLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const tocObserver = new IntersectionObserver((entries) => {
    entries.filter(e => e.isIntersecting).forEach((entry) => {
      tocLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-20% 0px -68% 0px' });
  sections.forEach((section) => tocObserver.observe(section));
}
