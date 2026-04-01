// ============================================================
//  MINI RETRO ARCADE — Datos de Productos
//  Modificar este archivo para actualizar el catálogo
// ============================================================

const WHATSAPP_NUMBER = "5491167887264"; // Sin + ni espacios

// ─── MODELOS DE MÁQUINAS ARCADE ───────────────────────────────────────────
const PRODUCTS = [
  {
    id: "consola-arcade-1p",
    name: "Consola Arcade 1 Jugador",
    description: "Consola arcade premium para un jugador. Conexión HDMI directa a tu TV. Componentes de alta resistencia y miles de juegos clásicos.",
    image: "assets/images/retro_console.png",
    basePrice: 125000,
    badge: "MÁS VENDIDO",
    category: "consola",
    addons: [
      { id: "joystick-sanwa",    name: "Joystick Sanwa Premium",          price: 35000  },
      { id: "marquesina-custom", name: "Diseño Personalizado",            price: 15000  },
      { id: "extra-juegos",      name: "Pack de Juegos Premium",          price: 5000   },
    ],
  },
  {
    id: "consola-arcade-2p",
    name: "Consola Arcade 2 Jugadores",
    description: "La experiencia arcade completa para compartir. Dos palancas, botones de acción y conexión plug & play para cualquier pantalla.",
    image: "assets/images/retro_console.png",
    basePrice: 185000,
    badge: "POPULAR",
    category: "consola",
    addons: [
      { id: "joystick-sanwa",    name: "Joysticks Sanwa Premium (x2)",    price: 60000  },
      { id: "diseño-pro",        name: "Vinilo Laminado Pro",             price: 25000  },
      { id: "salida-vga",        name: "Salida VGA adicional",            price: 12000  },
    ],
  },
  {
    id: "arcade-clasico",
    name: "Máquina Arcade Clásica",
    description: "El mueble arcade vertical que siempre soñaste. Tamaño real, monitor integrado y sonido estéreo.",
    image: "assets/images/arcade_classic.png",
    basePrice: 480000,
    badge: "PREMIUM",
    category: "maquina",
    addons: [
      { id: "monedero",          name: "Fichero con Monedero Real",       price: 45000  },
      { id: "marquesina-led",    name: "Marquesina LED Retroiluminada",   price: 25000  },
      { id: "ruedas",            name: "Ruedas de transporte Pro",        price: 15000  },
    ],
  },
];

// ─── PRÓXIMOS PRODUCTOS (Coming Soon) ─────────────────────────────────────
const COMING_SOON = [
  { id: "pool",     name: "Mesa de Pool",      icon: "🎱", description: "Mesa de pool reglamentaria. Próximamente." },
  { id: "metegol",  name: "Metegol",            icon: "⚽", description: "Metegol profesional. Próximamente."        },
  { id: "pingpong", name: "Mesa de Ping Pong",  icon: "🏓", description: "Próximamente disponible."                  },
];

// ─── SERVICIOS TÉCNICOS ────────────────────────────────────────────────────
const TECH_SERVICES = [
  { icon: "🔧", title: "Reparación de Joysticks",   desc: "Cambio de microswitches, palancas y botones." },
  { icon: "🖥️", title: "Reparación de Pantallas",   desc: "Pantallas rotas, sin imagen o con fallas."     },
  { icon: "⚡", title: "Reparación de Plaquetas",   desc: "Diagnóstico y reparación de placas de juegos." },
  { icon: "🎮", title: "Mantenimiento General",      desc: "Limpieza, lubricación y ajuste de máquinas."   },
  { icon: "🔌", title: "Instalación de Software",   desc: "Actualización y carga de nuevos juegos."        },
  { icon: "🚗", title: "Servicio a Domicilio",       desc: "Revisión en tu local o domicilio. Consultar."   },
];

// ─── REDES SOCIALES ────────────────────────────────────────────────────────
// ⚠️ REEMPLAZAR con los usuarios reales
const SOCIAL_LINKS = [
  { platform: "instagram", url: "https://instagram.com/miniretroarcade", icon: "📸", label: "@miniretroarcade" },
  { platform: "facebook",  url: "https://facebook.com/miniretroarcade",  icon: "👤", label: "Mini Retro Arcade" },
  // { platform: "tiktok", url: "https://tiktok.com/@miniretroarcade", icon: "🎵", label: "@miniretroarcade" },
];

// ─── UBICACIÓN ─────────────────────────────────────────────────────────────
// ⚠️ ACTUALIZAR cuando cambien de dirección
const LOCATION = {
  address:    "Av. [CALLE] [NÚMERO], [BARRIO], Buenos Aires",  // ← ACTUALIZAR
  mapEmbed:   "https://maps.google.com/maps?q=Buenos+Aires&output=embed", // ← ACTUALIZAR con link de Google Maps
  hours:      "Lunes a Sábado: 10:00 - 19:00",
  phone:      "+54 9 11 6788-7264",
};
