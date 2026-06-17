/* ============================================================
   MINI RETRO ARCADE — Catálogo, Configurador & Carrito
   ============================================================ */

// ─── STATE ──────────────────────────────────────────────────
let cart           = [];
let currentProduct = null;
let selectedAddons = new Set();
const _cardIdx     = {};   // { productId: currentImageIndex }

// ─── HELPERS ────────────────────────────────────────────────
const fmt = (n) => '$' + n.toLocaleString('es-AR');

function getImgs(p) {
  return (p.images && p.images.length) ? p.images : [p.image || ''];
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (!el) return;
  el.textContent = cart.length;
  el.classList.toggle('show', cart.length > 0);
}

// ─── CARRUSEL CARDS ─────────────────────────────────────────
window.slideCard = function(id, dir, total, event) {
  if (event) event.stopPropagation();
  _cardIdx[id] = ((_cardIdx[id] || 0) + dir + total) % total;
  goToCard(id, _cardIdx[id], total);
};

window.goToCard = function(id, idx, total) {
  _cardIdx[id] = idx;
  const track = document.getElementById('track-' + id);
  if (track) track.style.transform = 'translateX(-' + (idx * (100 / total)) + '%)';
  const dotsEl = document.getElementById('dots-' + id);
  if (dotsEl) {
    dotsEl.querySelectorAll('span').forEach(function(s, i) {
      s.style.background = i === idx ? '#fff' : 'rgba(255,255,255,.45)';
      s.style.transform  = i === idx ? 'scale(1.3)' : 'scale(1)';
    });
  }
};

// ─── GALERÍA MODAL ──────────────────────────────────────────
window.modalSelectImg = function(el, src) {
  document.getElementById('modal-img').src = src;
  const container = el.parentElement;
  container.querySelectorAll('img').forEach(function(t) {
    t.style.borderColor = t === el ? 'var(--orange)' : 'transparent';
    t.style.opacity     = t === el ? '1' : '0.55';
  });
};

// ─── RENDER CATALOG ─────────────────────────────────────────
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(function(p) {
    const imgs    = getImgs(p);
    const total   = imgs.length;
    const hasMany = total > 1;

    // Track de imágenes
    const trackStyle = 'display:flex;transition:transform .38s cubic-bezier(.4,0,.2,1);width:' + (total * 100) + '%;height:100%;';
    const imgItems   = imgs.map(function(src) {
      return '<img src="' + src + '" alt="' + p.name + '" loading="lazy"'
        + ' style="width:' + (100 / total) + '%;flex-shrink:0;object-fit:cover;height:100%;">';
    }).join('');

    // Flechas
    const arrows = hasMany
      ? '<button onclick="slideCard(\'' + p.id + '\',-1,' + total + ',event)" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.6);border:none;color:#fff;width:30px;height:30px;border-radius:50%;font-size:16px;cursor:pointer;z-index:5;line-height:30px;">‹</button>'
        + '<button onclick="slideCard(\'' + p.id + '\',1,' + total + ',event)" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.6);border:none;color:#fff;width:30px;height:30px;border-radius:50%;font-size:16px;cursor:pointer;z-index:5;line-height:30px;">›</button>'
      : '';

    // Dots
    const dots = hasMany
      ? '<div id="dots-' + p.id + '" style="position:absolute;bottom:8px;left:0;right:0;display:flex;justify-content:center;gap:6px;z-index:5;">'
        + imgs.map(function(_, i) {
            return '<span onclick="event.stopPropagation();goToCard(\'' + p.id + '\',' + i + ',' + total + ')"'
              + ' style="width:7px;height:7px;border-radius:50%;cursor:pointer;transition:all .2s;background:' + (i === 0 ? '#fff' : 'rgba(255,255,255,.45)') + ';' + (i === 0 ? 'transform:scale(1.3)' : '') + '"></span>';
          }).join('')
        + '</div>'
      : '';

    return '<article class="product-card" onclick="openConfigurator(\'' + p.id + '\')">'
      + (p.badge ? '<div class="product-badge">' + p.badge + '</div>' : '')
      + '<div class="product-img-wrap" style="position:relative;overflow:hidden;">'
      +   '<div id="track-' + p.id + '" style="' + trackStyle + '">' + imgItems + '</div>'
      +   arrows
      +   dots
      + '</div>'
      + '<div class="product-info">'
      +   '<h3 class="product-name">' + p.name + '</h3>'
      +   '<p class="product-desc">' + p.description + '</p>'
      +   '<div class="product-price">'
      +     '<span class="price-label">Desde</span>'
      +     '<span class="price-value">' + fmt(p.basePrice) + '</span>'
      +     '<span class="price-from">base</span>'
      +   '</div>'
      +   '<button class="btn-configure">🎮 Configurar máquina</button>'
      + '</div>'
      + '</article>';
  }).join('');
}

// ─── CONFIGURADOR MODAL ─────────────────────────────────────
window.openConfigurator = function(productId) {
  currentProduct = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!currentProduct) return;
  selectedAddons = new Set();

  const overlay = document.getElementById('config-modal');
  const imgs = getImgs(currentProduct);

  document.getElementById('modal-title').textContent = currentProduct.name;
  document.getElementById('modal-img').src = imgs[0];
  document.getElementById('modal-img').alt = currentProduct.name;
  document.getElementById('modal-base').innerHTML =
    'Precio base: <strong>' + fmt(currentProduct.basePrice) + '</strong>';

  // Miniaturas bajo la imagen principal
  const thumbsEl = document.getElementById('modal-thumbs');
  if (thumbsEl) {
    if (imgs.length > 1) {
      thumbsEl.style.display = 'flex';
      thumbsEl.innerHTML = imgs.map(function(src, i) {
        return '<img src="' + src + '" onclick="modalSelectImg(this,\'' + src + '\')"'
          + ' style="width:54px;height:54px;object-fit:cover;border-radius:6px;cursor:pointer;'
          + 'border:2px solid ' + (i === 0 ? 'var(--orange)' : 'transparent') + ';'
          + 'opacity:' + (i === 0 ? '1' : '0.55') + ';transition:all .2s;">';
      }).join('');
    } else {
      thumbsEl.style.display = 'none';
      thumbsEl.innerHTML = '';
    }
  }

  const addonsList = document.getElementById('addons-list');
  addonsList.innerHTML = currentProduct.addons.map(function(a) {
    return '<div class="addon-item" data-id="' + a.id + '" onclick="toggleAddon(\'' + a.id + '\')">'
      + '<div class="addon-left"><div class="addon-checkbox"></div>'
      + '<span class="addon-name">' + a.name + '</span></div>'
      + '<span class="addon-price">+ ' + fmt(a.price) + '</span></div>';
  }).join('');

  updateModalTotal();
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
};

window.toggleAddon = function(addonId) {
  if (selectedAddons.has(addonId)) {
    selectedAddons.delete(addonId);
  } else {
    selectedAddons.add(addonId);
  }
  const el = document.querySelector('.addon-item[data-id="' + addonId + '"]');
  if (el) el.classList.toggle('selected', selectedAddons.has(addonId));
  updateModalTotal();
};

function updateModalTotal() {
  if (!currentProduct) return;
  const extrasTotal = [...selectedAddons].reduce(function(sum, id) {
    const addon = currentProduct.addons.find(function(a) { return a.id === id; });
    return sum + (addon ? addon.price : 0);
  }, 0);
  document.getElementById('modal-total').textContent = fmt(currentProduct.basePrice + extrasTotal);
}

function closeConfigurator() {
  document.getElementById('config-modal').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('config-modal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeConfigurator();
});
document.getElementById('modal-close-btn')?.addEventListener('click', closeConfigurator);

// ─── AÑADIR AL CARRITO ───────────────────────────────────────
document.getElementById('btn-add-cart')?.addEventListener('click', () => {
  if (!currentProduct) return;
  const addonsData  = [...selectedAddons].map(id => currentProduct.addons.find(a => a.id === id)).filter(Boolean);
  const extrasTotal = addonsData.reduce((s, a) => s + a.price, 0);
  const total       = currentProduct.basePrice + extrasTotal;
  cart.push({ product: currentProduct, addons: addonsData, total });
  updateCartCount();
  closeConfigurator();
  showToast('✅ Máquina agregada al carrito');
  renderCart();
});

// ─── CONSULTAR POR WHATSAPP (1 producto directo) ─────────────
document.getElementById('btn-whatsapp-direct')?.addEventListener('click', () => {
  if (!currentProduct) return;
  const addonsData  = [...selectedAddons].map(id => currentProduct.addons.find(a => a.id === id)).filter(Boolean);
  const extrasTotal = addonsData.reduce((s, a) => s + a.price, 0);
  const total       = currentProduct.basePrice + extrasTotal;
  let text = `🕹️ *CONSULTA — MINI RETRO ARCADE*\n\n📦 *${currentProduct.name}*\n`;
  if (addonsData.length) {
    text += `\n*Adicionales seleccionados:*\n`;
    addonsData.forEach(a => { text += `  ✅ ${a.name} — ${fmt(a.price)}\n`; });
  }
  text += `\n💰 *Total estimado: ${fmt(total)}*\n\n_Consulto disponibilidad y plazo de entrega._`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});

// ─── RENDER CARRITO ──────────────────────────────────────────
function renderCart() {
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!itemsEl) return;
  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🎮</span><p>Tu carrito está vacío.<br>¡Configurá tu primera máquina!</p></div>`;
    if (totalEl) totalEl.textContent = '$0';
    return;
  }
  itemsEl.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-header">
        <span class="cart-item-name">${item.product.name}</span>
        <button class="cart-item-remove" onclick="removeCartItem(${i})">✕ Quitar</button>
      </div>
      <div class="cart-item-addons">
        ${item.addons.length ? item.addons.map(a => `✅ ${a.name}`).join('<br>') : '<span style="font-style:italic">Sin adicionales</span>'}
      </div>
      <div class="cart-item-price">${fmt(item.total)}</div>
    </div>
  `).join('');
  const grandTotal = cart.reduce((s, i) => s + i.total, 0);
  if (totalEl) totalEl.textContent = fmt(grandTotal);
}

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
};

// ─── SIDEBAR CARRITO ─────────────────────────────────────────
function openCart()  {
  document.getElementById('cart-overlay').classList.add('show');
  document.getElementById('cart-sidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  document.getElementById('cart-overlay').classList.remove('show');
  document.getElementById('cart-sidebar').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('nav-cart-btn')?.addEventListener('click', openCart);
document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
document.getElementById('cart-close')?.addEventListener('click', closeCart);

// ─── ENVIAR PEDIDO COMPLETO A WHATSAPP ───────────────────────
document.getElementById('btn-send-order')?.addEventListener('click', () => {
  if (cart.length === 0) { showToast('⚠️ El carrito está vacío'); return; }
  let text = `🕹️ *PEDIDO — MINI RETRO ARCADE*\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  cart.forEach((item, i) => {
    text += `📦 *Máquina ${i + 1}: ${item.product.name}*\n`;
    if (item.addons.length) {
      item.addons.forEach(a => { text += `  ✅ ${a.name} — ${fmt(a.price)}\n`; });
    } else { text += `  _(sin adicionales)_\n`; }
    text += `  💰 Subtotal: ${fmt(item.total)}\n\n`;
  });
  const grand = cart.reduce((s, i) => s + i.total, 0);
  text += `━━━━━━━━━━━━━━━━━━━━━━\n💵 *TOTAL: ${fmt(grand)}*\n\n📞 _Consulto disponibilidad, plazo de entrega y formas de pago._`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});

// ─── INIT ────────────────────────────────────────────────────
renderCatalog();
