(() => {
  'use strict';

  const translations = {
    es: {
      'nav.tagline': 'Growth Agency',
      'hero.eyebrow': 'Agencia MIHG',
      'hero.title': 'Tu aliado estratégico en el complejo mundo de las redes sociales',
      'hero.sub': 'Convertimos la confusión de las redes en una estrategia clara, medible y sostenible de crecimiento.',
      'hero.cta': 'Quiero crecer',
      'problem.text': 'Las redes sociales cambian todos los días. Sin una estrategia clara, es fácil perder tiempo, dinero y oportunidades — ya sea para tu negocio, tu marca personal o tu carrera profesional.',
      'proof.kicker': 'Prueba social',
      'proof.title': 'Resultados reales, no promesas',
      'proof.sub': 'Capturas directas de Instagram Analytics de cuentas asesoradas dentro de este proceso.',
      'proof.metric.views': 'visualizaciones',
      'proof.metric.days90': 'visualizaciones / 90 días',
      'solution.text': 'No tiene que ser así. Detrás de cada cuenta que crece rápido hay una estructura, no una casualidad. Te la voy a mostrar — sin promesas vacías de convertirte en el próximo MrBeast, pero sí con la certeza de que vas a entender cómo funciona el juego, con un plan de acción concreto para tu contenido.',
      'stat.label': 'visualizaciones',
      'stat.sub': 'últimos 90 días',
      'services.kicker': 'Cómo funciona',
      'services.title': 'En qué consiste',
      'services.hub': 'Asesoría 1 a 1',
      'services.card1.step': 'Paso 1',
      'services.card1.title': 'Diagnóstico honesto de tu contenido',
      'services.card1.text': 'Identifico exactamente qué está frenando tu crecimiento — desde el guion hasta la edición — y te doy un plan concreto para corregirlo.',
      'services.card2.step': 'Paso 2',
      'services.card2.title': 'Casos de referencia en tu nicho',
      'services.card2.text': 'Te muestro cuentas que ya están haciendo las cosas bien, analizamos por qué funcionan, y armamos juntos cómo adaptar esas ideas a tu propio estilo.',
      'services.card3.step': 'Paso 3',
      'services.card3.title': 'Espacio abierto de consultas',
      'services.card3.text': 'Durante la reunión resolvemos en vivo todas tus dudas sobre creación de contenido, formatos, herramientas y proceso creativo — sin respuestas genéricas.',
      'services.card4.step': 'Paso 4',
      'services.card4.title': 'Plan de acción a 3 meses',
      'services.card4.text': 'Te vas con una hoja de ruta personalizada — objetivos, formatos a probar y frecuencia de publicación — pensada para que tu contenido llegue a la audiencia correcta.',
      'cta.title': '¿Listo para comenzar?',
      'cta.sub': 'Agendá una reunión e indicanos de qué país sos para coordinar el horario y arrancar.',
      'cta.button': 'Vamos',
      'footer.text': 'Agencia MIHG — Asesoría estratégica en redes sociales.',
      'meta.title': 'Agencia MIHG — Asesoría estratégica en redes sociales',
      'meta.description': 'Asesoría 1 a 1 para crecer en redes sociales con estrategia real: diagnóstico de contenido, plan de acción a 3 meses y acompañamiento directo.',
      'mailto.subject': 'Asesoría de redes sociales',
      'mailto.body': 'Hola,\n\nMe interesa el servicio de asesoría.\nSoy de (mi país).\nMe gustaría obtener más información.\n\nMuchas gracias.'
    },
    en: {
      'nav.tagline': 'Growth Agency',
      'hero.eyebrow': 'MIHG Agency',
      'hero.title': 'Your strategic partner in the complex world of social media',
      'hero.sub': "We turn social media confusion into a clear, measurable, sustainable growth strategy.",
      'hero.cta': 'I want to grow',
      'problem.text': "Social media changes every day. Without a clear strategy, it's easy to waste time, money and opportunities — whether for your business, your personal brand, or your career.",
      'proof.kicker': 'Social proof',
      'proof.title': 'Real results, not promises',
      'proof.sub': 'Direct Instagram Analytics screenshots from accounts coached through this process.',
      'proof.metric.views': 'views',
      'proof.metric.days90': 'views / 90 days',
      'solution.text': "It doesn't have to be this way. Behind every account that grows fast, there's a structure — not luck. I'll show it to you — no empty promises of becoming the next MrBeast, but the certainty that you'll understand how the game works, with a concrete action plan for your content.",
      'stat.label': 'views',
      'stat.sub': 'last 90 days',
      'services.kicker': 'How it works',
      'services.title': "What's included",
      'services.hub': '1-on-1 Consulting',
      'services.card1.step': 'Step 1',
      'services.card1.title': 'Honest diagnosis of your content',
      'services.card1.text': "I pinpoint exactly what's holding your growth back — from scripting to editing — and give you a concrete plan to fix it.",
      'services.card2.step': 'Step 2',
      'services.card2.title': 'Reference cases in your niche',
      'services.card2.text': "I show you accounts that are already doing it right, we break down why it works, and build together how to adapt those ideas to your own style.",
      'services.card3.step': 'Step 3',
      'services.card3.title': 'Open Q&A space',
      'services.card3.text': "During the session we solve all your questions about content creation, formats, tools and creative process live — no generic answers.",
      'services.card4.step': 'Step 4',
      'services.card4.title': '3-month action plan',
      'services.card4.text': "You leave with a personalized roadmap — goals, formats to test and posting frequency — designed to get your content in front of the right audience.",
      'cta.title': 'Ready to get started?',
      'cta.sub': "Book a meeting and let us know which country you're in so we can coordinate the time and get going.",
      'cta.button': "Let's go",
      'footer.text': 'MIHG Agency — Strategic social media consulting.',
      'meta.title': 'MIHG Agency — Strategic Social Media Consulting',
      'meta.description': '1-on-1 consulting to grow on social media with a real strategy: content diagnosis, 3-month action plan and direct support.',
      'mailto.subject': 'Social Media Consulting',
      'mailto.body': 'Hello,\n\nI am interested in your consulting service.\nI am from (my country).\nI would like to receive more information.\n\nThank you.'
    }
  };

  const CONTACT_EMAIL = 'matias.hiriart15@gmail.com';
  const STORAGE_KEY = 'mihg-lang';

  const root = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-btn');
  const mailtoBtn = document.getElementById('mailto-btn');

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);

    root.setAttribute('lang', lang);

    langButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    if (mailtoBtn) {
      const to = encodeURIComponent(CONTACT_EMAIL);
      const subject = encodeURIComponent(dict['mailto.subject']);
      const body = encodeURIComponent(dict['mailto.body']);
      mailtoBtn.setAttribute('href', `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`);
      mailtoBtn.setAttribute('target', '_blank');
      mailtoBtn.setAttribute('rel', 'noopener noreferrer');
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  const savedLang = localStorage.getItem(STORAGE_KEY);
  applyLanguage(savedLang === 'en' ? 'en' : 'es');

  // ---- Nav scroll state ----
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---- Count-up stat ----
  const statEl = document.querySelector('.stat-number');
  if (statEl) {
    const target = Number(statEl.getAttribute('data-count'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const formatNumber = (n) => {
      const lang = root.getAttribute('lang') === 'en' ? 'en-US' : 'es-AR';
      return new Intl.NumberFormat(lang).format(Math.round(n));
    };

    const runCountUp = () => {
      if (reducedMotion) {
        statEl.textContent = formatNumber(target);
        return;
      }
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        statEl.textContent = formatNumber(target * eased);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCountUp();
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statObserver.observe(statEl);
  }
})();
