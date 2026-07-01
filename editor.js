/* ============================================================
   OSPADEP Editor — lógica de canvas
   Registros de marca · Intervención fotográfica · Contraforma D
   ============================================================ */

'use strict';

// ── LOGO (embebido para evitar CORS en canvas export) ───────
const LOGO_DATA_URL = "data:image/png;base64,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";
const logoImg = new Image();
logoImg.src = LOGO_DATA_URL;

// ── CONFIGURACIÓN DE MARCA ──────────────────────────────────

const FORMATS = {
  square:   { w: 1080, h: 1080, label: '1080 × 1080 px' },
  portrait: { w: 1080, h: 1350, label: '1080 × 1350 px' },
  story:    { w: 1080, h: 1920, label: '1080 × 1920 px' },
};

const REGISTERS = {
  institucional: {
    label: 'Institucional',
    desc: 'Paleta primaria: azul, cian, verde. Sin complementarios. Mucho aire y blanco.',
    interv: ['#004f9f', '#032b6e', '#00a2c8', '#15af97'],
    bg:     ['#ffffff', '#004f9f', '#032b6e', '#efefef'],
    text:   ['#ffffff', '#032b6e', '#004f9f', '#00a2c8'],
    badgeColor: '#00a2c8',
  },
  marketing: {
    label: 'Marketing',
    desc: 'Bloque pleno verde teal. Mensajes descontracturados, tipografía blanca grande.',
    interv: ['#15af97', '#032b6e'],
    bg:     ['#15af97', '#032b6e', '#ffffff'],
    text:   ['#ffffff', '#032b6e'],
    badgeColor: '#15af97',
  },
  promociones: {
    label: 'Promociones',
    desc: 'Complementarios: naranja y ámbar. Solo para descuentos y beneficios.',
    interv: ['#e94e1b', '#f8ab16', '#032b6e'],
    bg:     ['#e94e1b', '#f8ab16', '#032b6e', '#ffffff'],
    text:   ['#ffffff', '#032b6e'],
    badgeColor: '#f8ab16',
  },
};

// ── ESTADO ─────────────────────────────────────────────────

const state = {
  // Foto
  image:       null,
  imgOffsetX:  0,
  imgOffsetY:  0,
  imgZoom:     1.0,
  // Layout
  format:      'square',
  // Marca
  register:    'institucional',
  interv:      'duotone',
  intervColor: '#004f9f',
  bgColor:     '#ffffff',
  textColor:   '#ffffff',
  intensity:   55,
  // Texto
  tag:         '',
  headline:    '',
  body:        '',
  textPos:     'bottom-left',
  // Elementos
  showLogo:    true,
  showDOutline:false,
  dX:          65,   // % del ancho del canvas
  dY:          50,   // % del alto del canvas
  dSize:       82,   // % del alto del canvas
  dOpacity:    6,    // 1-40
  showDots:    false,
  showChevron: false,
};

// ── DRAG STATE ──────────────────────────────────────────────
const drag = {
  active:   false,
  lastX:    0,
  lastY:    0,
};

let rafPending = false;

// ── REFS ────────────────────────────────────────────────────

const canvas    = document.getElementById('canvas');
const ctx       = canvas.getContext('2d');
const fileInput = document.getElementById('fileInput');
const uploadZone= document.getElementById('uploadZone');

// ── INIT ────────────────────────────────────────────────────

function init() {
  setFormat('square');
  setRegister('institucional');
  bindEvents();
  render();
}

// ── EVENTS ──────────────────────────────────────────────────

function bindEvents() {

  // Upload
  fileInput.addEventListener('change', onFileSelect);
  uploadZone.addEventListener('dragover',  e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
  uploadZone.addEventListener('dragleave', ()=> uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]);
  });
  document.getElementById('clearPhotoBtn').addEventListener('click', clearPhoto);

  // Zoom
  document.getElementById('zoomRange').addEventListener('input', e => {
    state.imgZoom = parseInt(e.target.value) / 100;
    document.getElementById('zoomVal').textContent = e.target.value + '%';
    clampOffset();
    scheduleRender();
  });
  document.getElementById('resetCropBtn').addEventListener('click', () => {
    state.imgOffsetX = 0;
    state.imgOffsetY = 0;
    state.imgZoom = 1.0;
    document.getElementById('zoomRange').value = 100;
    document.getElementById('zoomVal').textContent = '100%';
    scheduleRender();
  });

  // Canvas drag (pan foto)
  canvas.addEventListener('mousedown',  onDragStart);
  canvas.addEventListener('touchstart', onTouchStart, { passive: false });
  window.addEventListener('mousemove',  onDragMove);
  window.addEventListener('touchmove',  onTouchMove, { passive: false });
  window.addEventListener('mouseup',    onDragEnd);
  window.addEventListener('touchend',   onDragEnd);

  // Formato
  document.querySelectorAll('.fmt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fmt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setFormat(btn.dataset.fmt);
    });
  });

  // Registro
  document.querySelectorAll('.reg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.reg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setRegister(btn.dataset.reg);
    });
  });

  // Intervención
  document.querySelectorAll('input[name="interv"]').forEach(r => {
    r.addEventListener('change', () => {
      state.interv = r.value;
      const showInt = r.value === 'duotone' || r.value === 'both';
      document.getElementById('intensityWrap').style.display = showInt ? 'flex' : 'none';
      scheduleRender();
    });
  });

  // Intensidad
  document.getElementById('intensityRange').addEventListener('input', e => {
    state.intensity = parseInt(e.target.value);
    document.getElementById('intensityVal').textContent = state.intensity + '%';
    scheduleRender();
  });

  // Posición texto
  document.querySelectorAll('input[name="textpos"]').forEach(r => {
    r.addEventListener('change', () => { state.textPos = r.value; scheduleRender(); });
  });

  // Texto
  document.getElementById('tagInput').addEventListener('input',      e => { state.tag      = e.target.value; scheduleRender(); });
  document.getElementById('headlineInput').addEventListener('input', e => { state.headline = e.target.value; scheduleRender(); });
  document.getElementById('bodyInput').addEventListener('input',     e => { state.body     = e.target.value; scheduleRender(); });

  // Checkboxes elementos
  document.getElementById('chkLogo').addEventListener('change', e => {
    state.showLogo = e.target.checked; scheduleRender();
  });
  document.getElementById('chkDOutline').addEventListener('change', e => {
    state.showDOutline = e.target.checked;
    document.getElementById('dControls').style.display = e.target.checked ? 'flex' : 'none';
    scheduleRender();
  });
  document.getElementById('chkDots').addEventListener('change', e => {
    state.showDots = e.target.checked; scheduleRender();
  });
  document.getElementById('chkChevron').addEventListener('change', e => {
    state.showChevron = e.target.checked; scheduleRender();
  });

  // D outline controls
  document.getElementById('dXRange').addEventListener('input', e => {
    state.dX = parseInt(e.target.value);
    document.getElementById('dXVal').textContent = state.dX + '%';
    scheduleRender();
  });
  document.getElementById('dYRange').addEventListener('input', e => {
    state.dY = parseInt(e.target.value);
    document.getElementById('dYVal').textContent = state.dY + '%';
    scheduleRender();
  });
  document.getElementById('dSizeRange').addEventListener('input', e => {
    state.dSize = parseInt(e.target.value);
    document.getElementById('dSizeVal').textContent = state.dSize + '%';
    scheduleRender();
  });
  document.getElementById('dOpacityRange').addEventListener('input', e => {
    state.dOpacity = parseInt(e.target.value);
    document.getElementById('dOpacityVal').textContent = state.dOpacity + '%';
    scheduleRender();
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportImage);
}

// ── DRAG HANDLERS ────────────────────────────────────────────

function getDisplayScale() {
  return canvas.getBoundingClientRect().width / canvas.width;
}

function onDragStart(e) {
  if (!state.image) return;
  drag.active = true;
  drag.lastX  = e.clientX;
  drag.lastY  = e.clientY;
  canvas.classList.add('dragging');
}
function onTouchStart(e) {
  if (!state.image) return;
  e.preventDefault();
  drag.active = true;
  drag.lastX  = e.touches[0].clientX;
  drag.lastY  = e.touches[0].clientY;
}
function onDragMove(e) {
  if (!drag.active) return;
  const scale  = getDisplayScale();
  const dx = (e.clientX - drag.lastX) / scale;
  const dy = (e.clientY - drag.lastY) / scale;
  drag.lastX = e.clientX;
  drag.lastY = e.clientY;
  state.imgOffsetX += dx;
  state.imgOffsetY += dy;
  clampOffset();
  scheduleRender();
}
function onTouchMove(e) {
  if (!drag.active) return;
  e.preventDefault();
  const scale  = getDisplayScale();
  const dx = (e.touches[0].clientX - drag.lastX) / scale;
  const dy = (e.touches[0].clientY - drag.lastY) / scale;
  drag.lastX = e.touches[0].clientX;
  drag.lastY = e.touches[0].clientY;
  state.imgOffsetX += dx;
  state.imgOffsetY += dy;
  clampOffset();
  scheduleRender();
}
function onDragEnd() {
  drag.active = false;
  canvas.classList.remove('dragging');
}

/** Limita el offset para que la imagen siempre cubra el canvas. */
function clampOffset() {
  if (!state.image) return;
  const { w, h } = FORMATS[state.format];
  const base  = Math.max(w / state.image.width, h / state.image.height);
  const scale = base * state.imgZoom;
  const sw = state.image.width  * scale;
  const sh = state.image.height * scale;
  const maxX = Math.max(0, (sw - w) / 2);
  const maxY = Math.max(0, (sh - h) / 2);
  state.imgOffsetX = Math.max(-maxX, Math.min(maxX, state.imgOffsetX));
  state.imgOffsetY = Math.max(-maxY, Math.min(maxY, state.imgOffsetY));
}

// ── FILE HANDLING ────────────────────────────────────────────

function onFileSelect(e) {
  if (e.target.files[0]) loadFile(e.target.files[0]);
}
function loadFile(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      state.image      = img;
      state.imgOffsetX = 0;
      state.imgOffsetY = 0;
      state.imgZoom    = 1.0;
      document.getElementById('zoomRange').value = 100;
      document.getElementById('zoomVal').textContent = '100%';
      document.getElementById('clearPhotoBtn').style.display = '';
      document.getElementById('photoControls').style.display = 'flex';
      render();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}
function clearPhoto() {
  state.image = null;
  fileInput.value = '';
  document.getElementById('clearPhotoBtn').style.display  = 'none';
  document.getElementById('photoControls').style.display  = 'none';
  render();
}

// ── SETTERS QUE REBUILDAN LA UI ──────────────────────────────

function setFormat(fmt) {
  state.format = fmt;
  const { w, h } = FORMATS[fmt];
  canvas.width  = w;
  canvas.height = h;
  document.getElementById('dimsLabel').textContent = FORMATS[fmt].label;
  clampOffset();
  render();
}

function setRegister(reg) {
  state.register = reg;
  const R = REGISTERS[reg];

  document.getElementById('registerInfo').textContent = R.desc;

  buildSwatches('colorSwatches',    R.interv, 'intervColor');
  buildSwatches('bgSwatches',       R.bg,     'bgColor');
  buildSwatches('textColorSwatches',R.text,   'textColor');

  if (!R.interv.includes(state.intervColor)) state.intervColor = R.interv[0];
  if (!R.bg.includes(state.bgColor))         state.bgColor     = R.bg[0];
  if (!R.text.includes(state.textColor))     state.textColor   = R.text[0];

  refreshSwatchActive('colorSwatches',     state.intervColor);
  refreshSwatchActive('bgSwatches',        state.bgColor);
  refreshSwatchActive('textColorSwatches', state.textColor);

  const badge = document.getElementById('previewRegister');
  badge.textContent  = R.label;
  badge.style.background = R.badgeColor + '28';
  badge.style.color      = R.badgeColor;

  render();
}

function buildSwatches(containerId, colors, stateKey) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  colors.forEach(hex => {
    const el = document.createElement('div');
    el.className = 'swatch' + (state[stateKey] === hex ? ' active' : '');
    el.style.background = hex;
    if (hex === '#ffffff' || hex === '#efefef') {
      el.style.outline = '1px solid rgba(255,255,255,0.25)';
    }
    el.title = hex;
    el.addEventListener('click', () => {
      state[stateKey] = hex;
      refreshSwatchActive(containerId, hex);
      render();
    });
    container.appendChild(el);
  });
}

function refreshSwatchActive(containerId, activeHex) {
  document.querySelectorAll(`#${containerId} .swatch`).forEach(el => {
    el.classList.toggle('active', el.title === activeHex);
  });
}

// ── RENDER ──────────────────────────────────────────────────

function scheduleRender() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => { rafPending = false; render(); });
}

async function render() {
  const { w, h } = FORMATS[state.format];
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w; canvas.height = h;
  }
  ctx.clearRect(0, 0, w, h);
  await document.fonts.ready;

  const hasPhoto   = !!state.image;
  const useDuotone = state.interv === 'duotone' || state.interv === 'both';
  const useDBox    = state.interv === 'dbox'    || state.interv === 'both';
  const hasText    = state.tag || state.headline || state.body;

  // 1. Fondo
  ctx.fillStyle = state.bgColor;
  ctx.fillRect(0, 0, w, h);

  // 2. Watermark D (detrás de todo)
  if (state.showDOutline) drawDOutlineWatermark(ctx, w, h);

  // 3. Foto
  if (hasPhoto) {
    ctx.save();
    if (useDBox) clipToD(ctx, 0, 0, w, h);

    if (useDuotone) ctx.filter = 'grayscale(1)';
    drawImageCover(ctx, state.image, 0, 0, w, h);
    ctx.filter = 'none';

    if (useDuotone) {
      const alpha = state.intensity / 100;
      const rgb   = hexToRgb(state.intervColor);
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha * 0.38})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.restore();
  }

  // 4. Decorativos
  if (state.showDots)    drawDotGrid(ctx, w, h);
  if (state.showChevron) drawChevrons(ctx, w, h);

  // 5. Gradiente legibilidad texto
  if (hasText && hasPhoto && !useDBox) {
    const gradH = Math.min(h, h * 0.65);
    const grad  = ctx.createLinearGradient(0, h - gradH, 0, h);
    grad.addColorStop(0,   'rgba(3,43,110,0)');
    grad.addColorStop(0.4, 'rgba(3,43,110,0.55)');
    grad.addColorStop(1,   'rgba(3,43,110,0.92)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  // 6. Texto
  if (hasText) drawText(ctx, w, h);

  // 7. Logo
  if (state.showLogo) drawLogo(ctx, w, h);

  document.getElementById('exportHint').textContent =
    `${FORMATS[state.format].label} · Registro ${REGISTERS[state.register].label}`;
}

// ── CANVAS HELPERS ───────────────────────────────────────────

function clipToD(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y);
  ctx.arc(x + w / 2, y + h / 2, h / 2, -Math.PI / 2, Math.PI / 2, false);
  ctx.lineTo(x, y + h);
  ctx.closePath();
  ctx.clip();
}

function drawImageCover(ctx, img, x, y, w, h) {
  const baseScale = Math.max(w / img.width, h / img.height);
  const scale = baseScale * state.imgZoom;
  const sw = img.width  * scale;
  const sh = img.height * scale;
  const sx = x + (w - sw) / 2 + state.imgOffsetX;
  const sy = y + (h - sh) / 2 + state.imgOffsetY;
  ctx.drawImage(img, sx, sy, sw, sh);
}

/** Watermark contorno D, posición y tamaño controlables. */
function drawDOutlineWatermark(ctx, w, h) {
  const size = h * (state.dSize / 100);
  const cx   = w * (state.dX / 100);
  const cy   = h * (state.dY / 100);
  const x    = cx - size / 4;   // anclar desde aprox. borde izquierdo visual
  const y    = cy - size / 2;

  ctx.save();
  ctx.strokeStyle = `rgba(255,255,255,${state.dOpacity / 100})`;
  ctx.lineWidth   = Math.max(1, w * 0.003);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y);
  ctx.arc(x + size / 2, y + size / 2, size / 2, -Math.PI / 2, Math.PI / 2, false);
  ctx.lineTo(x, y + size);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawDotGrid(ctx, w, h) {
  const pad     = w * 0.06;
  const dotR    = w * 0.004;
  const spacing = w * 0.025;
  const cols = 8, rows = 4;
  const startX = pad;
  const startY = h - pad - (rows - 1) * spacing;

  ctx.save();
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.beginPath();
      ctx.arc(startX + c * spacing, startY + r * spacing, dotR, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawChevrons(ctx, w, h) {
  const size    = w * 0.045;
  const x       = w * 0.88;
  const y       = h * 0.42;
  const spacing = size * 0.65;

  ctx.save();
  ctx.strokeStyle = state.intervColor || '#00a2c8';
  ctx.lineWidth   = w * 0.005;
  ctx.lineCap     = 'round';
  ctx.lineJoin    = 'round';
  for (let i = 0; i < 2; i++) {
    const baseY = y + i * spacing;
    ctx.beginPath();
    ctx.moveTo(x - size / 2, baseY);
    ctx.lineTo(x,             baseY + size / 2);
    ctx.lineTo(x + size / 2, baseY);
    ctx.stroke();
  }
  ctx.restore();
}

/** Logo real OSPADEP: azul sobre fondo claro, blanco sobre fondo oscuro. */
function drawLogo(ctx, w, h) {
  if (!logoImg.complete || !logoImg.naturalWidth) return;

  const pad    = Math.round(w * 0.058);
  const logoH  = Math.round(w * 0.048);
  const ratio  = logoImg.naturalWidth / logoImg.naturalHeight;
  const logoW  = Math.round(logoH * ratio);

  // Determinar tono: si fondo es blanco/gris claro y no hay foto → usar logo azul
  const lightBg = !state.image && (state.bgColor === '#ffffff' || state.bgColor === '#efefef');
  const tone = lightBg ? 'dark' : 'light';

  ctx.save();
  ctx.shadowColor   = tone === 'light' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.12)';
  ctx.shadowBlur    = w * 0.01;
  ctx.shadowOffsetY = w * 0.003;

  if (tone === 'light') {
    // Tintear blanco en offscreen canvas
    const oc  = document.createElement('canvas');
    oc.width  = logoImg.naturalWidth;
    oc.height = logoImg.naturalHeight;
    const octx = oc.getContext('2d');
    octx.drawImage(logoImg, 0, 0);
    octx.globalCompositeOperation = 'source-in';
    octx.fillStyle = '#ffffff';
    octx.fillRect(0, 0, oc.width, oc.height);
    ctx.drawImage(oc, pad, pad, logoW, logoH);
  } else {
    ctx.drawImage(logoImg, pad, pad, logoW, logoH);
  }

  ctx.restore();
}

/** Texto tag + titular + cuerpo. */
function drawText(ctx, w, h) {
  const pad     = Math.round(w * 0.08);
  const maxW    = w - pad * 2;

  const tagSize = Math.round(w * 0.026);
  const hlSize  = Math.round(w * 0.088);
  const bdSize  = Math.round(w * 0.036);
  const hlLH    = Math.round(hlSize * 1.08);
  const bdLH    = Math.round(bdSize * 1.5);
  const gap     = Math.round(w * 0.018);

  ctx.font = `900 ${hlSize}px Raleway`;
  const hlLines = wrapText(ctx, state.headline, maxW);

  ctx.font = `400 ${bdSize}px Poppins`;
  const bdLines = wrapText(ctx, state.body, maxW);

  const tagH = state.tag        ? tagSize * 1.5 + gap : 0;
  const hlH  = hlLines.length   ? hlLines.length * hlLH + gap : 0;
  const bdH  = bdLines.length   ? bdLines.length * bdLH : 0;
  const blockH = tagH + hlH + bdH;

  let blockTop;
  if (state.textPos === 'bottom-left')  blockTop = h - pad - blockH;
  else if (state.textPos === 'top-left') blockTop = pad + (state.showLogo ? Math.round(w * 0.13) : 0);
  else                                   blockTop = (h - blockH) / 2;

  let y = blockTop;
  ctx.save();
  ctx.textBaseline = 'top';

  if (state.tag) {
    ctx.font = `700 ${tagSize}px Raleway`;
    ctx.fillStyle = state.register === 'promociones' ? state.intervColor : '#00a2c8';
    ctx.letterSpacing = `${Math.round(w * 0.004)}px`;
    ctx.fillText(state.tag.toUpperCase(), pad, y);
    ctx.letterSpacing = '0px';
    y += tagSize * 1.5 + gap;
  }

  if (hlLines.length) {
    ctx.font      = `900 ${hlSize}px Raleway`;
    ctx.fillStyle = state.textColor;
    for (const line of hlLines) { ctx.fillText(line, pad, y); y += hlLH; }
    y += gap;
  }

  if (bdLines.length) {
    ctx.font        = `400 ${bdSize}px Poppins`;
    ctx.fillStyle   = state.textColor;
    ctx.globalAlpha = 0.78;
    for (const line of bdLines) { ctx.fillText(line, pad, y); y += bdLH; }
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

function wrapText(ctx, text, maxWidth) {
  if (!text || !text.trim()) return [];
  const lines = [];
  for (const para of text.split('\n')) {
    if (!para.trim()) { lines.push(''); continue; }
    let line = '';
    for (const word of para.split(' ')) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line); line = word;
      } else { line = test; }
    }
    if (line) lines.push(line);
  }
  return lines;
}

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#',''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

// ── EXPORT ───────────────────────────────────────────────────

async function exportImage() {
  await render();
  const slug = (state.headline || state.tag || 'imagen')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,30).replace(/-$/,'');
  const link = document.createElement('a');
  link.download = `ospadep-${state.register}-${state.format}-${slug}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ── ARRANCAR ─────────────────────────────────────────────────
init();
