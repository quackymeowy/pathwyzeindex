const translations = (window.PathwyzeData && window.PathwyzeData.translations) || {};
const caseData = (window.PathwyzeData && window.PathwyzeData.caseData) || {};
const sectionsData = (window.PathwyzeData && window.PathwyzeData.sections) || {};

const STORAGE_LANG_KEY = 'pathwyze_lang';

// Detect which page we're on by element presence
const PAGE = {
  isHome: !!document.getElementById('home-view'),
  isCases: !!document.getElementById('cases-list-view'),
  isShowcase: !!document.querySelector('[data-page="showcase"]'),
};

const els = {
  // Home page
  homeView: () => document.getElementById('home-view'),
  caseView: () => document.getElementById('case-view'),
  // Cases page
  listView: () => document.getElementById('cases-list-view'),
  detailView: () => document.getElementById('cases-detail-view'),
  casesGrid: () => document.querySelector('[data-cases-grid]'),
  // Shared
  mobileBtn: () => document.getElementById('mobile-menu-btn'),
  mobileMenu: () => document.getElementById('mobile-menu'),
  caseTag: () => document.getElementById('case-detail-tag'),
  caseTitle: () => document.getElementById('case-detail-title'),
  caseSub: () => document.getElementById('case-detail-sub'),
  caseChallenge: () => document.getElementById('case-detail-challenge'),
  caseSolution: () => document.getElementById('case-detail-solution'),
};

// ─── Language ───────────────────────────────────────────────────────────────

function getLang() {
  return document.documentElement.lang || localStorage.getItem(STORAGE_LANG_KEY) || 'en';
}

function getCaseContent(caseId, lang) {
  const item = caseData[caseId];
  if (!item || !item.content) return null;
  return item.content[lang] || item.content.en || null;
}

function getCaseContentNormalized(caseId, lang) {
  const raw = getCaseContent(caseId, lang);
  if (!raw) return null;

  const dict = translations[lang] || {};
  const resultFallback = dict[`${caseId}_result`] || '';

  return {
    tag: raw.tag || '',
    cardTitle: raw.cardTitle || raw.title || '',
    cardDesc: raw.cardDesc || '',
    cardResult: raw.cardResult || resultFallback,
    title: raw.title || raw.cardTitle || '',
    sub: raw.sub || '',
    challengeHtml: raw.challengeHtml || '',
    solutionHtml: raw.solutionHtml || '',
  };
}

function validateCaseDataShape() {
  const expected = ['tag', 'cardTitle', 'cardDesc', 'title', 'sub', 'challengeHtml', 'solutionHtml'];
  const langs = ['en', 'zh-cn', 'zh-tw'];

  Object.entries(caseData).forEach(([caseId, item]) => {
    if (!item || !item.content) {
      console.warn(`[Pathwyze] ${caseId} is missing content block`);
      return;
    }

    langs.forEach((lang) => {
      const content = item.content[lang];
      if (!content) {
        console.warn(`[Pathwyze] ${caseId} is missing language: ${lang}`);
        return;
      }
      expected.forEach((key) => {
        if (!content[key]) {
          console.warn(`[Pathwyze] ${caseId}.${lang} is missing field: ${key}`);
        }
      });
    });
  });
}

function getSortedCases() {
  return Object.entries(caseData)
    .filter((entry) => entry[1] && entry[1].published !== false)
    .sort((a, b) => {
      const ao = typeof a[1].order === 'number' ? a[1].order : 999999;
      const bo = typeof b[1].order === 'number' ? b[1].order : 999999;
      return ao - bo;
    });
}

function getPartners() {
  const list = sectionsData.partnersLogos;
  if (Array.isArray(list) && list.length) return list;
  console.warn('[Pathwyze] sections.partnersLogos is empty or missing');
  return [];
}

function formatSolutionInline(container) {
  if (!container) return;

  const headings = Array.from(container.querySelectorAll('h4'));
  headings.forEach((heading) => {
    const next = heading.nextElementSibling;
    if (!next || next.tagName !== 'P') return;

    if (next.querySelector('img')) {
      const titleOnly = document.createElement('p');
      titleOnly.innerHTML = `<strong class="case-inline-heading">${heading.textContent}:</strong>`;
      heading.replaceWith(titleOnly);
      return;
    }

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `<strong class="case-inline-heading">${heading.textContent}:</strong> ${next.innerHTML}`;
    heading.replaceWith(paragraph);
    next.remove();
  });
}

function escapeAttr(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderPartners() {
  const grid = document.querySelector('[data-partners-grid]');
  if (!grid) return;

  const html = getPartners()
    .map((item) => {
      const name = typeof item === 'string' ? item : item.name || '';
      const src = typeof item === 'object' ? item.logoSrc || '' : '';

      if (src) {
        return (
          `<div class="partner-logo" aria-label="${escapeAttr(name)}">` +
          `<img src="${escapeAttr(src)}" alt="${escapeAttr(name)}" class="partner-logo-img" loading="lazy">` +
          `</div>`
        );
      }

      return `<div class="partner-logo" aria-label="Partner logo placeholder">${escapeAttr(name)}</div>`;
    })
    .join('');

  grid.innerHTML = html;
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_LANG_KEY, lang);

  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && dict[key]) element.innerHTML = dict[key];
  });

  // Re-render cases list on language change (cases page only)
  if (PAGE.isCases) {
    renderCases();
    // Re-show current case if hash points to a valid case
    const hash = window.location.hash.substring(1);
    if (hash && getCaseContent(hash, lang)) {
      showCase(hash);
    }
  }

  if (PAGE.isShowcase && window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// ─── Render ────────────────────────────────────────────────────────────────

function renderCases() {
  const grid = els.casesGrid();
  if (!grid) return;

  const lang = getLang();
  const html = getSortedCases()
    .map((entry, index) => {
      const caseId = entry[0];
      const item = entry[1];
      const content = getCaseContentNormalized(caseId, lang);
      if (!content) return '';

      const delay = index === 1 ? ' reveal-delay-1' : index === 2 ? ' reveal-delay-2' : '';
      return (
        `<div data-case-id="${caseId}" class="case-card group cursor-pointer reveal active${delay}" role="button" tabindex="0">` +
        `  <div class="aspect-[4/3] bg-neutral-100 rounded-[24px] mb-6 overflow-hidden relative border border-neutral-100 shadow-sm group-hover:shadow-md transition-all duration-500">` +
        `    <img src="${item.coverImage || ''}" alt="${item.coverAlt || content.cardTitle || ''}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">` +
        `    <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>` +
        `    <div class="absolute bottom-4 left-4 flex flex-col items-start gap-2">` +
        `      <span class="bg-white/90 backdrop-blur text-black px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-sm">${content.tag}</span>` +
        `      <span class="case-result-pill">${content.cardResult.trim() || '&nbsp;'}</span>` +
        `    </div>` +
        `  </div>` +
        `  <h4 class="font-bold text-xl group-hover:text-neutral-600 transition-colors tracking-tight">${content.cardTitle || content.title || ''}</h4>` +
        `  <p class="text-neutral-500 text-sm mt-2">${content.cardDesc || ''}</p>` +
        `</div>`
      );
    })
    .join('');

  grid.innerHTML = html;
}

// ─── Mobile menu ────────────────────────────────────────────────────────────

function setMobileMenuOpen(open) {
  const btn = els.mobileBtn();
  const menu = els.mobileMenu();
  if (!btn || !menu) return;

  const spans = btn.querySelectorAll('span');
  if (open) {
    if (spans[0]) spans[0].style.transform = 'translateY(4px) rotate(-45deg)';
    if (spans[1]) {
      spans[1].style.transform = 'translateY(-3.5px) rotate(45deg)';
      spans[1].style.width = '24px';
    }
    menu.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  } else {
    if (spans[0]) spans[0].style.transform = 'none';
    if (spans[1]) {
      spans[1].style.transform = 'none';
      spans[1].style.width = '16px';
    }
    menu.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ─── View switching ────────────────────────────────────────────────────────

/** Show the home / list view, optionally clearing the hash. */
function showHome({ clearHash = false } = {}) {
  const mainEl = PAGE.isHome ? els.homeView() : els.listView();
  const detailEl = PAGE.isHome ? els.caseView() : els.detailView();
  if (!mainEl || !detailEl) return;

  mainEl.classList.remove('hidden-view');
  detailEl.classList.add('hidden-view');
  setMobileMenuOpen(false);

  if (clearHash) {
    history.replaceState(null, '', `${location.pathname}${location.search}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (PAGE.isHome) {
    setTimeout(() => initScrollReveal(), 100);
  }
}

/** Show a specific case study. Works on both home and cases pages. */
function showCase(caseId) {
  const content = getCaseContentNormalized(caseId, getLang());
  if (!content) return;

  const tag = els.caseTag();
  const title = els.caseTitle();
  const sub = els.caseSub();
  const challenge = els.caseChallenge();
  const solution = els.caseSolution();

  if (tag) tag.innerText = content.tag;
  if (title) title.innerText = content.title;
  if (sub) sub.innerText = content.sub;
  if (challenge) challenge.innerHTML = content.challengeHtml;
  if (solution) {
    solution.innerHTML = content.solutionHtml;
    formatSolutionInline(solution);
  }

  const mainEl = PAGE.isHome ? els.homeView() : els.listView();
  const detailEl = PAGE.isHome ? els.caseView() : els.detailView();
  if (!mainEl || !detailEl) return;

  mainEl.classList.add('hidden-view');
  detailEl.classList.remove('hidden-view');
  setMobileMenuOpen(false);

  history.replaceState(null, '', `#${caseId}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Hash routing ───────────────────────────────────────────────────────────

function handleHash() {
  const hash = window.location.hash.substring(1);

  if (hash && getCaseContent(hash, getLang())) {
    showCase(hash);
    return;
  }

  if (PAGE.isHome && hash && ['services', 'work', 'team'].includes(hash)) {
    showHome();
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return;
  }

  showHome();
}

// ─── Scroll reveal ──────────────────────────────────────────────────────────

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ─── Event wiring ───────────────────────────────────────────────────────────

function wireEvents() {
  const mobileBtn = els.mobileBtn();
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenuOpen(!expanded);
    });
  }

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const langBtn = target.closest('[data-lang]');
    if (langBtn) {
      const lang = langBtn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
      return;
    }

    // Home page: [data-action="home"]
    const homeAction = target.closest('[data-action="home"]');
    if (homeAction) {
      showHome({ clearHash: true });
      return;
    }

    // Cases page: [data-action="cases-home"]
    const casesAction = target.closest('[data-action="cases-home"]');
    if (casesAction) {
      showHome({ clearHash: true });
      return;
    }

    const caseEl = target.closest('[data-case-id]');
    if (caseEl) {
      const caseId = caseEl.getAttribute('data-case-id');
      if (caseId) showCase(caseId);
      return;
    }

    const mobileLink = target.closest('.mobile-link');
    if (mobileLink) setMobileMenuOpen(false);
  });

  window.addEventListener('hashchange', handleHash);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target;
    if (!(target instanceof Element)) return;

    const actionable = target.closest('[data-action], [data-case-id]');
    if (!actionable) return;
    if (!actionable.hasAttribute('tabindex')) return;

    e.preventDefault();
    actionable.click();
  });
}

// ─── Init ───────────────────────────────────────────────────────────────────

function init() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  validateCaseDataShape();
  renderPartners();

  setLanguage(localStorage.getItem(STORAGE_LANG_KEY) || 'en');

  if (PAGE.isCases) {
    renderCases();
  } else {
    initScrollReveal();
  }

  wireEvents();
  handleHash();
}

document.addEventListener('DOMContentLoaded', init);
