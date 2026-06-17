const WHATSAPP_NUMBER = "5491167887264";

const PRODUCTS = [
  {
    "id": "consola-arcade-1p",
    "name": "Joystick Arcade USB para PC",
    "description": "Compatible con PC (USB Plug & Play). Palanca tipo Sanwa. Botones arcade de alta respuesta. Gráfica personalizada con plotter laminado. Ideal para emuladores y juegos de pelea. No incluye juegos.",
    "images": [
      "assets/images/prod_1781703009230.jpeg",
      "assets/images/prod_1781703012046.jpeg"
    ],
    "basePrice": 10000000,
    "badge": "MÁS VENDIDO",
    "category": "consola",
    "addons": [
      {
        "id": "joystick-sanwa",
        "name": "Joystick Sanwa Premium",
        "price": 35000
      },
      {
        "id": "marquesina-custom",
        "name": "Diseño Personalizado",
        "price": 15000
      },
      {
        "id": "extra-juegos",
        "name": "Pack de Juegos Premium",
        "price": 5000
      }
    ]
  },
  {
    "id": "consola-arcade-2p",
    "name": "Mando Arcade 1 Player",
    "description": "Más de 11.000 juegos incluidos. Memoria de 32GB. Palancas disponibles tipo Sanwa. Botones arcade de alta respuesta. Gráfica personalizada con plotter laminado. Sistema listo para conectar y jugar.\nCompatible con TV y monitor mediante HDMI.",
    "images": [
      "assets/images/retro_console.png"
    ],
    "basePrice": 185000,
    "badge": "POPULAR",
    "category": "consola",
    "addons": [
      {
        "id": "joystick-sanwa",
        "name": "Joysticks Sanwa Premium (x2)",
        "price": 60000
      },
      {
        "id": "diseño-pro",
        "name": "Vinilo Laminado Pro",
        "price": 25000
      },
      {
        "id": "salida-vga",
        "name": "Salida VGA adicional",
        "price": 12000
      }
    ]
  },
  {
    "id": "arcade-clasico",
    "name": "Mando Arcade 2 Players – 60 cm",
    "description": "- Más de 11.000 juegos incluidos.\n- Memoria de 32GB.\n- Palancas tipo Sanwa o semiprofesionales.\n- Gráfica en plotter laminado.\n- Tapacanto en todos sus laterales.\n- Patitas antideslizantes.\n- Compatible con TV y monitor mediante HDMI.\n- Listo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 480000,
    "badge": "PREMIUM",
    "category": "maquina",
    "addons": [
      {
        "id": "monedero",
        "name": "Fichero con Monedero Real",
        "price": 45000
      },
      {
        "id": "marquesina-led",
        "name": "Marquesina LED Retroiluminada",
        "price": 25000
      },
      {
        "id": "ruedas",
        "name": "Ruedas de transporte Pro",
        "price": 15000
      }
    ]
  }
];

const COMING_SOON = [
  {
    "id": "pool",
    "name": "Mesa de Pool",
    "icon": "🎱",
    "description": "Mesa de pool reglamentaria. Próximamente."
  },
  {
    "id": "metegol",
    "name": "Metegol",
    "icon": "⚽",
    "description": "Metegol profesional. Próximamente."
  },
  {
    "id": "pingpong",
    "name": "Mesa de Ping Pong",
    "icon": "🏓",
    "description": "Próximamente disponible."
  }
];

const TECH_SERVICES = [
  {
    "icon": "🔧",
    "title": "Reparación de Joysticks",
    "desc": "Cambio de microswitches, palancas y botones."
  },
  {
    "icon": "🖥️",
    "title": "Reparación de Pantallas",
    "desc": "Pantallas rotas, sin imagen o con fallas."
  },
  {
    "icon": "⚡",
    "title": "Reparación de Plaquetas",
    "desc": "Diagnóstico y reparación de placas de juegos."
  },
  {
    "icon": "🎮",
    "title": "Mantenimiento General",
    "desc": "Limpieza, lubricación y ajuste de máquinas."
  },
  {
    "icon": "🔌",
    "title": "Instalación de Software",
    "desc": "Actualización y carga de nuevos juegos."
  },
  {
    "icon": "🚗",
    "title": "Servicio a Domicilio",
    "desc": "Revisión en tu local o domicilio. Consultar."
  }
];

const SOCIAL_LINKS = [
  {
    "platform": "instagram",
    "url": "https://instagram.com/miniretroarcade",
    "icon": "📸",
    "label": "@miniretroarcade"
  },
  {
    "platform": "facebook",
    "url": "https://facebook.com/miniretroarcade",
    "icon": "👤",
    "label": "Mini Retro Arcade"
  }
];

const LOCATION = {
  "address": "Av. [CALLE] [NÚMERO], [BARRIO], Buenos Aires",
  "mapEmbed": "https://maps.google.com/maps?q=Buenos+Aires&output=embed",
  "hours": "Lunes a Sábado: 10:00 - 19:00",
  "phone": "+54 9 11 6788-7264"
};