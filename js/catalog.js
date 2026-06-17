/* ============================================================
   MINI RETRO ARCADE — Catálogo, Configurador & Carrito
   ============================================================ */

// ─── STATE ──────────────────────────────────────────────────
let cart            = [];    // [{ product, selectedAddons, total }]
let currentProduct  = null;
let selectedAddons  = new Set();

// ─── HELPERS ────────────────────────────────────────────────
const fmt = (n) => '$' + n.toLocaleString('es-AR');

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (!el) return;
  el.textContent = cart.length;
  el.classList.toggle('show', cart.length > 0);
}

// ─── RENDER CATALOG ─────────────────────────────────────────
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card" onclick="openConfigurator('${p.id}')">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-price">
          <span class="price-label">Desde</span>
          <span class="price-value">${fmt(p.basePrice)}</span>
          <span class="price-from">base</span>
        </div>
        <button class="btn-configure">🎮 Configurar máquina</button>
      </div>
    </article>
  `).join('');
}

// ─── CONFIGURADOR MODAL ─────────────────────────────────────
window.openConfigurator = function(productId) {
  currentProduct = PRODUCTS.find(p => p.id === productId);
  if (!currentProduct) return;
  selectedAddons = new Set();

  const overlay = document.getElementById('config-modal');
  document.getElementById('modal-title').textContent = currentProduct.name;
  document.getElementById('modal-img').src     = currentProduct.image;
  document.getElementById('modal-img').alt     = currentProduct.name;
  document.getElementById('modal-base').innerHTML =
    `Precio base: <strong>${fmt(currentProduct.basePrice)}</strong>`;

  const addonsList = document.getElementById('addons-list');
  addonsList.innerHTML = currentProduct.addons.map(a => `
    <div class="addon-item" data-id="${a.id}" onclick="toggleAddon('${a.id}')">
      <div class="addon-left">
        <div class="addon-checkbox"></div>
        <span class="addon-name">${a.name}</span>
      </div>
      <span class="addon-price">+ ${fmt(a.price)}</span>
    </div>
  `).join('');

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
  const el = document.querySelector(`.addon-item[data-id="${addonId}"]`);
  el?.classList.toggle('selected', selectedAddons.has(addonId));
  updateModalTotal();
};

function updateModalTotal() {
  if (!currentProduct) return;
  const extrasTotal = [...selectedAddons].reduce((sum, id) => {
    const addon = currentProduct.addons.find(a => a.id === id);
    return sum + (addon?.price || 0);
  }, 0);
  const total = currentProduct.basePrice + extrasTotal;
  document.getElementById('modal-total').textContent = fmt(total);
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

  const addonsData = [...selectedAddons].map(id => currentProduct.addons.find(a => a.id === id)).filter(Boolean);
  const extrasTotal = addonsData.reduce((s, a) => s + a.price, 0);
  const total = currentProduct.basePrice + extrasTotal;

  cart.push({ product: currentProduct, addons: addonsData, total });
  updateCartCount();
  closeConfigurator();
  showToast('✅ Máquina agregada al carrito');
  renderCart();
});

// ─── CONSULTAR POR WHATSAPP (1 producto directo) ─────────────
document.getElementById('btn-whatsapp-direct')?.addEventListener('click', () => {
  if (!currentProduct) return;
  const addonsData = [...selectedAddons].map(id => currentProduct.addons.find(a => a.id === id)).filter(Boolean);
  const extrasTotal = addonsData.reduce((s, a) => s + a.price, 0);
  const total = currentProduct.basePrice + extrasTotal;

  let text = `🕹️ *CONSULTA — MINI RETRO ARCADE*\n\n`;
  text += `📦 *${currentProduct.name}*\n`;
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
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🎮</span>
        <p>Tu carrito está vacío.<br>¡Configurá tu primera máquina!</p>
      </div>`;
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
        ${item.addons.length
          ? item.addons.map(a => `✅ ${a.name}`).join('<br>')
          : '<span style="font-style:italic">Sin adicionales</span>'}
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

  let text = `🕹️ *PEDIDO — MINI RETRO ARCADE*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  cart.forEach((item, i) => {
    text += `📦 *Máquina ${i + 1}: ${item.product.name}*\n`;
    if (item.addons.length) {
      item.addons.forEach(a => { text += `  ✅ ${a.name} — ${fmt(a.price)}\n`; });
    } else {
      text += `  _(sin adicionales)_\n`;
    }
    text += `  💰 Subtotal: ${fmt(item.total)}\n\n`;
  });

  const grand = cart.reduce((s, i) => s + i.total, 0);
  text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💵 *TOTAL: ${fmt(grand)}*\n\n`;
  text += `📞 _Consulto disponibilidad, plazo de entrega y formas de pago._`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});

// ─── INIT ────────────────────────────────────────────────────
renderCatalog();
