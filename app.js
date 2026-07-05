/**
 * app.js — నిత్య శ్లోకాలు
 * Mobile-first: Home grid → Full-screen reader
 */

// ── State ─────────────────────────────────────────
const state = {
  currentId:    null,
  currentPage:  0,
  zoomed:       false,
  favorites:    JSON.parse(localStorage.getItem('nitya-favorites') || '[]'),
  filtered:     [...SLOKAS],
};

// ── DOM ───────────────────────────────────────────
const $  = id => document.getElementById(id);
const screenHome    = $('screen-home');
const screenReader  = $('screen-reader');
const slokaGrid     = $('sloka-grid');
const searchInput   = $('search-input');

const readerNum     = $('reader-num');
const readerTitle   = $('reader-title');
const readerImg     = $('reader-img');
const readerLoader  = $('reader-loader');
const readerImgWrap = $('reader-img-wrap');
const pageBar       = $('page-bar');
const pageCur       = $('page-cur');
const pageTot       = $('page-tot');
const btnPagePrev   = $('btn-page-prev');
const btnPageNext   = $('btn-page-next');
const audioBar      = $('audio-bar');
const slokaAudio    = $('sloka-audio');
const audioNo       = $('audio-no');
const btnSlokaNext  = $('btn-sloka-next');
const btnSlokaPrev  = $('btn-sloka-prev');
const rnavDots      = $('rnav-dot-wrap');
const btnBack       = $('btn-back');
const btnFavCur     = $('btn-fav-current');
const btnZoom       = $('btn-zoom-toggle');
const btnTheme      = $('btn-theme');
const btnFavView    = $('btn-fav-view');
const favModal      = $('fav-modal');
const favList       = $('fav-list');
const toast         = $('toast');

let toastTimer = null;

// ── Init ─────────────────────────────────────────
function init() {
  setTheme(localStorage.getItem('nitya-theme') || 'dark');
  buildGrid(SLOKAS);
  bindEvents();
}

// ── Build Home Grid ───────────────────────────────
function buildGrid(items) {
  slokaGrid.innerHTML = '';
  state.filtered = items;

  if (items.length === 0) {
    slokaGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text3);padding:40px;font-family:var(--ff-telugu)">శ్లోకాలు కనుగొనలేదు</p>';
    return;
  }

  let lastCat = null;
  items.forEach((sloka, idx) => {
    const globalIdx = SLOKAS.indexOf(sloka);
    const num = globalIdx + 1;

    // Category label
    if (sloka.category !== lastCat) {
      lastCat = sloka.category;
      const catEl = document.createElement('div');
      catEl.className = 'grid-cat-label';
      catEl.innerHTML = `<span class="grid-cat-text">${sloka.category}</span><div class="grid-cat-line"></div>`;
      slokaGrid.appendChild(catEl);
    }

    // Card
    const card = document.createElement('div');
    card.className = 'sloka-card' + (state.favorites.includes(sloka.id) ? ' fav' : '');
    card.dataset.id = sloka.id;
    // Apply category color as CSS variable
    if (sloka.color) card.style.setProperty('--card-accent', `var(${sloka.color})`);

    const pages = sloka.pages || [];
    const multiPage = pages.length > 1
      ? `<div class="card-pages-badge">📄 ${pages.length} పేజీలు</div>`
      : '';

    card.innerHTML = `
      <span class="card-num">${num}.</span>
      <div class="card-content">
        <div class="card-title">${sloka.title}</div>
        <div class="card-en">${sloka.titleEn || ''}</div>
        ${multiPage}
      </div>
    `;
    card.addEventListener('click', () => openReader(sloka.id));
    slokaGrid.appendChild(card);
  });
}

// ── Open Reader ───────────────────────────────────
function openReader(id) {
  const sloka = SLOKAS.find(s => s.id === id);
  if (!sloka) return;
  state.currentId   = id;
  state.currentPage = 0;
  state.zoomed      = false;

  const globalIdx = SLOKAS.indexOf(sloka);
  readerNum.textContent = `#${globalIdx + 1}`;
  readerTitle.textContent = sloka.title;
  const readerEnEl = document.getElementById('reader-en');
  if (readerEnEl) readerEnEl.textContent = sloka.titleEn || '';

  // Show reader screen
  screenHome.classList.add('hidden');
  screenReader.classList.remove('hidden');

  // Load image
  loadPage(sloka, 0);

  // Audio
  setupAudio(sloka);

  // Fav button
  updateFavBtn();

  // Nav dots (show position among filtered)
  buildNavDots();
  updateSlokaNavBtns();

  // Scroll image to top
  readerImgWrap.scrollTo(0, 0);
}

function loadPage(sloka, pageIdx) {
  const pages = sloka.pages || [];
  const src   = pages[pageIdx] || '';
  const total = pages.length;

  // Page bar
  if (total > 1) {
    pageBar.classList.remove('hidden');
    pageCur.textContent = pageIdx + 1;
    pageTot.textContent = total;
    btnPagePrev.disabled = pageIdx === 0;
    btnPageNext.disabled = pageIdx === total - 1;
  } else {
    pageBar.classList.add('hidden');
  }

  // Load image
  readerLoader.classList.remove('done');
  readerImg.style.opacity = '0';

  // Remove any old placeholder
  const old = readerImgWrap.querySelector('.no-img');
  if (old) old.remove();
  readerImg.style.display = 'block';

  readerImg.onload = () => {
    readerImg.style.opacity = '1';
    readerLoader.classList.add('done');
    readerImgWrap.scrollTo(0, 0);
    // Update loader text
    const lt = readerLoader.querySelector('.loader-text');
    if (lt) lt.textContent = '';
  };
  readerImg.onerror = () => {
    readerImg.style.display = 'none';
    readerLoader.classList.add('done');
    const ph = document.createElement('div');
    ph.className = 'no-img';
    ph.innerHTML = `<div class="ni-icon">${sloka.icon}</div><p><strong>${sloka.title}</strong><br><br>Image not found:<br>${src}</p>`;
    readerImgWrap.appendChild(ph);
  };
  readerImg.src = src;

  // Reset zoom
  state.zoomed = false;
  readerImg.classList.remove('zoomed');
}

function setupAudio(sloka) {
  if (sloka.audio) {
    slokaAudio.src = sloka.audio;
    slokaAudio.style.display = 'block';
    audioNo.style.display    = 'none';
    audioBar.style.display   = 'block';
  } else {
    slokaAudio.src            = '';
    slokaAudio.style.display  = 'none';
    audioNo.style.display     = 'block';
    audioBar.style.display    = 'block';
  }
}

// ── Zoom toggle ───────────────────────────────────
btnZoom.addEventListener('click', () => {
  state.zoomed = !state.zoomed;
  readerImg.classList.toggle('zoomed', state.zoomed);
  readerImgWrap.scrollTo(0, 0);
  btnZoom.classList.toggle('active', state.zoomed);
});

// Tap image to zoom
readerImg.addEventListener('click', () => {
  state.zoomed = !state.zoomed;
  readerImg.classList.toggle('zoomed', state.zoomed);
  readerImgWrap.scrollTo(0, 0);
  btnZoom.classList.toggle('active', state.zoomed);
});

// ── Page nav (within sloka) ───────────────────────
btnPagePrev.addEventListener('click', () => {
  if (state.currentPage <= 0) return;
  state.currentPage--;
  const sloka = SLOKAS.find(s => s.id === state.currentId);
  loadPage(sloka, state.currentPage);
});
btnPageNext.addEventListener('click', () => {
  const sloka = SLOKAS.find(s => s.id === state.currentId);
  if (!sloka) return;
  const total = (sloka.pages || []).length;
  if (state.currentPage >= total - 1) return;
  state.currentPage++;
  loadPage(sloka, state.currentPage);
});

// ── Sloka nav (between slokas) ────────────────────
function updateSlokaNavBtns() {
  const idx = state.filtered.findIndex(s => s.id === state.currentId);
  btnSlokaPrev.disabled = idx <= 0;
  btnSlokaNext.disabled = idx >= state.filtered.length - 1;
}
function buildNavDots() {
  rnavDots.innerHTML = '';
  const items = state.filtered;
  const curIdx = items.findIndex(s => s.id === state.currentId);
  // Position counter
  const posEl = document.getElementById('rnav-pos');
  if (posEl) posEl.textContent = `${curIdx + 1} / ${items.length}`;
  // Dots (only if ≤ 20)
  const dotWrap = document.getElementById('rnav-dot-wrap');
  if (!dotWrap) return;
  dotWrap.innerHTML = '';
  if (items.length <= 20) {
    items.forEach(s => {
      const d = document.createElement('div');
      d.className = 'rnav-dot' + (s.id === state.currentId ? ' active' : '');
      d.addEventListener('click', () => openReader(s.id));
      dotWrap.appendChild(d);
    });
  }
}
btnSlokaPrev.addEventListener('click', () => navigateSloka(-1));
btnSlokaNext.addEventListener('click', () => navigateSloka(1));
function navigateSloka(dir) {
  const idx  = state.filtered.findIndex(s => s.id === state.currentId);
  const next = state.filtered[idx + dir];
  if (next) openReader(next.id);
}

// ── Back ──────────────────────────────────────────
btnBack.addEventListener('click', () => {
  slokaAudio.pause();
  screenReader.classList.add('hidden');
  screenHome.classList.remove('hidden');
  // Scroll grid to active card
  const activeCard = slokaGrid.querySelector(`.sloka-card[data-id="${state.currentId}"]`);
  if (activeCard) activeCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
});

// ── Favorites ─────────────────────────────────────
function updateFavBtn() {
  const isFav = state.favorites.includes(state.currentId);
  btnFavCur.classList.toggle('active', isFav);
}
function toggleFav(id) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) { state.favorites.push(id); showToast('❤️ Favorites కి జోడించబడింది'); }
  else            { state.favorites.splice(idx, 1); showToast('💔 తొలగించబడింది'); }
  localStorage.setItem('nitya-favorites', JSON.stringify(state.favorites));
  updateFavBtn();
  // Update grid card
  const card = slokaGrid.querySelector(`.sloka-card[data-id="${id}"]`);
  if (card) card.classList.toggle('fav', state.favorites.includes(id));
}
btnFavCur.addEventListener('click', () => { if (state.currentId) toggleFav(state.currentId); });

// Favorites modal
btnFavView.addEventListener('click', () => { renderFavModal(); favModal.classList.remove('hidden'); });
$('btn-close-fav').addEventListener('click', () => favModal.classList.add('hidden'));
favModal.addEventListener('click', e => { if (e.target === favModal) favModal.classList.add('hidden'); });

function renderFavModal() {
  favList.innerHTML = '';
  if (state.favorites.length === 0) {
    favList.innerHTML = '<li class="fav-empty">ఇంకా Favorites లేవు 🙏</li>';
    return;
  }
  state.favorites.forEach(fid => {
    const s = SLOKAS.find(x => x.id === fid);
    if (!s) return;
    const num = SLOKAS.indexOf(s) + 1;
    const li  = document.createElement('li');
    li.innerHTML = `<span class="fav-num">#${num}</span><span>${s.icon}</span><span>${s.title}</span><span class="fav-rm">✕</span>`;
    li.addEventListener('click', e => {
      if (e.target.classList.contains('fav-rm')) { toggleFav(fid); renderFavModal(); }
      else { favModal.classList.add('hidden'); openReader(fid); }
    });
    favList.appendChild(li);
  });
}

// ── Search ────────────────────────────────────────
searchInput.addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const results = q
    ? SLOKAS.filter(s =>
        s.title.toLowerCase().includes(q) ||
        (s.titleEn && s.titleEn.toLowerCase().includes(q)) ||
        s.category.toLowerCase().includes(q)
      )
    : [...SLOKAS];
  buildGrid(results);
});

// ── Theme ─────────────────────────────────────────
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('nitya-theme', t);
  btnTheme.querySelector('.icon-moon').classList.toggle('hidden', t === 'light');
  btnTheme.querySelector('.icon-sun').classList.toggle('hidden',  t === 'dark');
}
btnTheme.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// ── Keyboard ──────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (!screenReader.classList.contains('hidden')) {
    if (e.key === 'ArrowLeft')  navigateSloka(-1);
    if (e.key === 'ArrowRight') navigateSloka(1);
    if (e.key === 'Backspace' || e.key === 'Escape') btnBack.click();
    if (e.key === 'ArrowUp')   btnPagePrev.click();
    if (e.key === 'ArrowDown') btnPageNext.click();
  }
});

// ── Swipe gestures ────────────────────────────────
let touchStartX = 0, touchStartY = 0;
screenReader.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });
screenReader.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
  if (Math.abs(dx) > 60 && dy < 50) {
    if (dx < 0) navigateSloka(1);   // swipe left = next
    else         navigateSloka(-1);  // swipe right = prev
  }
}, { passive: true });

// ── Toast ─────────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ── Bind extra events ─────────────────────────────
function bindEvents() { /* all inline */ }

// ── Start ─────────────────────────────────────────
init();
