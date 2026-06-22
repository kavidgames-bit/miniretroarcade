const WHATSAPP_NUMBER = "5491167887264";

const PRODUCTS = [
  {
    "id": "consola-arcade-1p",
    "name": "Joystick Arcade USB para PC",
    "description": "Compatible con PC/RaspBerry (USB Plug & Play). Palanca tipo Sanwa con placa zero delay. Botones arcade de alta respuesta. Gráfica personalizada con plotter laminado. Ideal para emuladores y juegos de pelea. No incluye juegos.",
    "images": [
      "assets/images/prod_1781703009230.jpeg",
      "assets/images/prod_1781703012046.jpeg",
      "assets/images/prod_1781740027563.jpeg",
      "assets/images/prod_1781740034482.jpeg",
      "assets/images/prod_1781740019699.jpeg"
    ],
    "basePrice": 190000,
    "badge": "MÁS VENDIDO",
    "category": "consola",
    "addons": [
      {
        "id": "marquesina-custom",
        "name": "Diseño Personalizado",
        "price": 0
      },
      {
        "id": "extra-juegos",
        "name": "Consola con juegos 32gb",
        "price": 130000
      },
      {
        "id": "new-1781739155596",
        "name": "Palanca Americana Semi Profesional",
        "price": 35000
      },
      {
        "id": "new-1781739173918",
        "name": "Botones Americanos con switch (x8)",
        "price": 30000
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
    "description": "Más de 11.000 juegos incluidos. Memoria de 32GB.\nPalancas tipo Sanwa. Gráfica en plotter laminado. Tapacanto en todos sus laterales.\nPatitas antideslizantes. Compatible con TV y monitor mediante HDMI. Listo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 350000,
    "badge": "PREMIUM",
    "category": "maquina",
    "addons": []
  },
  {
    "id": "new-1781738022710",
    "name": "Mando Arcade 2 Players – 75 cm",
    "description": "Mando de 75 cm de ancho.\nMás de 11.000 juegos incluidos.\nMemoria de 32GB.\nAmplio espacio de juego para dos jugadores.\nPalancas semiprofesionales.\nGráfica en plotter laminado.\nTapacanto en todos sus laterales.\nPatitas antideslizantes.\nCompatible con TV y monitor mediante HDMI.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 450000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781738026233",
    "name": "Mando Arcade 2 Players – 90 cm",
    "description": "90 cm de ancho.\nMás de 11.000 juegos.\nMemoria de 32GB.\nPalancas semiprofesionales.\nGráfica en plotter laminado.\nTapacanto en todos sus laterales.\nPatitas antideslizantes.\nHDMI.\nListo para jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 550000,
    "badge": "",
    "category": "otros",
    "addons": [
      {
        "id": "new-1781740719951",
        "name": "Memoria de 64gb (+ 19.000 juegos)",
        "price": 40000
      }
    ]
  },
  {
    "id": "new-1781738027367",
    "name": "Kit Arcade para Armar – 60 cm",
    "description": "Mando de 2 jugadores de 60 cm.\n2 palancas semiprofesionales.\n16 botones con microswitch.\n2 placas Zero Delay.\n2 cables USB.\nCable terminal de 26 pines.\nCable HDMI de 3 metros.\n4 patas de PVC.\nGráfica en plotter laminado.\nTapacanto PVC.\nRaspberry Pi 3.\nMicro SD de 32GB.\nDisipadores para Raspberry Pi 3.\nFuente para Raspberry Pi 3.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 250000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781740916365",
    "name": "Kit Arcade para Armar – 75 cm",
    "description": "Mando de 2 jugadores de 75 cm.\n2 palancas semiprofesionales.\n16 botones con microswitch.\n2 placas Zero Delay.\n2 cables USB.\nCable terminal de 26 pines.\nCable HDMI de 3 metros.\n4 patas de PVC.\nGráfica en plotter laminado.\nTapacanto PVC.\nRaspberry Pi 3.\nMicro SD de 32GB.\nDisipadores para Raspberry Pi 3.\nFuente para Raspberry Pi 3.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 350000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781740987469",
    "name": "Mando Arcade 3 Players",
    "description": "Más de 11.000 juegos incluidos.\nMemoria de 32GB.\nDiseñado para hasta 3 jugadores.\nPalancas semiprofesionales.\nGráfica en plotter laminado.\nTapacanto en todos sus laterales.\nPatitas antideslizantes.\nCompatible con TV y monitor mediante HDMI.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 600000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741027771",
    "name": "Mando Arcade 4 Players",
    "description": "Más de 11.000 juegos incluidos.\nMemoria de 32GB.\nDiseñado para hasta 4 jugadores.\nPalancas tipo Sanwa o semiprofesionales.\nGráfica en plotter laminado.\nTapacanto en todos sus laterales.\nPatitas antideslizantes.\nCompatible con TV y monitor mediante HDMI.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 700000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741058205",
    "name": "Mini Retro Arcade 32GB",
    "description": "Más de 11.000 juegos incluidos.\nDisponible en 32GB.\nIncluye cable HDMI.\nIncluye 2 joysticks.\nCompatible con TV y monitor.\nFácil instalación.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741170215",
    "name": "Mini Retro Pi 4 – 128GB",
    "description": "Todas las consolas de tu infancia en un solo equipo.\n\nRaspberry Pi 4.\nMicro SD de 128GB Clase 10.\nMás de 12.000 juegos.\nConsolas clásicas: Nintendo, Sega, Arcade, PlayStation, Atari y más.\nIncluye cable HDMI.\nIncluye fuente de alimentación.\n2 joysticks USB analógicos.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741224335",
    "name": "Mini Retro Gamer Edition",
    "description": "Más de 12.000 juegos incluidos.\nConsolas clásicas y arcade en un solo equipo.\nIncluye cable HDMI.\nIncluye 2 joysticks USB.\nCompatible con TV y monitor.\nFácil instalación.\nListo para conectar y jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741306367",
    "name": "Arcade Slim 1,80 x 80",
    "description": "Medidas: 1,80 m de alto x 80 cm de ancho.\nMonitor de 24\".\nMás de 11.000 juegos incluidos.\nMemoria de 32GB.\nPalancas semiprofesionales.\nSistema de sonido integrado.\nGráfica en plotter laminado.\nTapacanto en todos sus laterales.\nDiseño Slim de excelente terminación.\nPara 2 jugadores.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741486368",
    "name": "Arcade Slim 1,80 x 60 cm",
    "description": "Medidas: 1,80 m de alto x 60 cm de frente.\nRaspberry Pi 3B+.\n11.587 juegos incluidos.\nPantalla LED/LCD de 24\".\n6 botones por jugador + Start y Select.\nPalancas semiprofesionales de 8 movimientos.\nMarquesina de vidrio ploteada.\nVidrio protector en pantalla.\nLaminado completo antidesgaste.\nInteriores pintados y tapacantos PVC.\nSistema de sonido integrado.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741555188",
    "name": "Arcade Slim PRO 1,80 x 80 cm",
    "description": "Medidas: 1,80 m de alto x 76 cm de frente.\nRaspberry Pi 3B+.\n11.587 juegos incluidos.\nPantalla LED/LCD de 32\".\n6 botones por jugador + Start y Select.\nPalancas semiprofesionales de 8 movimientos.\nMarquesina de vidrio ploteada.\nVidrio protector en pantalla.\nLaminado completo antidesgaste.\nInteriores pintados y tapacantos PVC.\nSistema de sonido integrado.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": [
      {
        "id": "new-1781741565913",
        "name": "Luz LED en marquesinaLuz LED en marquesina: realza la estética del arcade. Disponible con o sin botón de encendido independiente.",
        "price": 0
      },
      {
        "id": "new-1781741575524",
        "name": "Patas regulables (x4): permiten nivelar el equipo en cualquier superficie.",
        "price": 0
      },
      {
        "id": "new-1781741586590",
        "name": "Parlantes 2.1: sonido más potente, con mayor profundidad y calidad de audio.",
        "price": 0
      },
      {
        "id": "new-1781741594418",
        "name": "Puertos USB traseros: conexión rápida para joysticks, teclados, pendrives y otros accesorios.",
        "price": 0
      }
    ]
  },
  {
    "id": "new-1781741612970",
    "name": "Arcade Clásico 1,80 x 60 cm",
    "description": "Medidas: 1,80 m de alto x 60 cm de ancho.\nRaspberry Pi 3B+.\nPantalla LCD de 19\".\nPalancas semiprofesionales.\n8 a 10 botones por jugador.\nPlacas Zero Delay por jugador.\nBotonera laminada.\nLaterales y frente laminados.\nTapacantos PVC.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741917008",
    "name": "Arcade Medium 1,80 cm x 60 cm",
    "description": "Medidas: 1,80 m de alto x 60 cm de ancho.\nRaspberry Pi 3B+.\nPantalla LCD de 24\".\n8 botones por jugador + Start y Select.\nPalancas semiprofesionales de 8 movimientos.\n",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741917866",
    "name": "Arcade Mini Clásico 1,50 m x 55 cm",
    "description": "Medidas: 1,50 m de alto x 45 o 55 cm de ancho.\nRaspberry Pi 3B+.\nPantalla LCD de 17\".\n6 u 8 botones por jugador.\nBotonera laminada.\nMarquesina con iluminación LED.\nDiseño compacto ideal para espacios reducidos.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781741918752",
    "name": "Arcade Kids – Salones de Fiesta",
    "description": "Medidas: 1,50 m de alto x 60 cm de frente.\nPandora Box con 6200 juegos clásicos.\nDiseñado para salones de fiestas y eventos.\nSistema seguro, sin riesgo de desconfiguración.\nMueble resistente para uso intensivo.\nIdeal para niños y espacios recreativos.\nListo para disfrutar durante toda la fiesta.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 1250000,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781742118238",
    "name": "Pedestal Slim",
    "description": "Fabricado en MDF de 18 mm.\nGráfica 100% laminada antidesgaste.\nAltura: 92 cm.\nBase de apoyo: 77 cm de largo x 26 cm de profundidad.\nDiseño compacto y resistente.\nIdeal para mandos arcade y consolas retro.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781742184318",
    "name": "Pedestal Slim con Puerta y Repisa",
    "description": "Fabricado en MDF de 18 mm.\nGráfica 100% laminada antidesgaste.\nPuerta con manija y traba.\n3 estantes internos.\nInterior pintado con esmalte sintético.\nAltura: 90 cm.\nBase de apoyo: 77 cm de largo x 26 cm de profundidad.\nDiseño práctico para almacenamiento y organización.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781742257604",
    "name": "Pedestal FAT",
    "description": "Fabricado en MDF de 18 mm.\nGráfica 100% laminada antidesgaste.\nAltura: 80 cm.\nBase de apoyo: 74 cm de largo x 40 cm de profundidad.\nDiseño robusto y resistente.\nIdeal para mandos arcade y consolas retro.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781742345952",
    "name": "Retro USB 32GB + Joystick Analógico",
    "description": "Pendrive de 32GB con sistema retro.\nUtilizable exclusivamente en PC.\nIncluye joystick analógico con cable.\nCompatible con múltiples consolas clásicas y arcade.\nFácil instalación.\nListo para jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1781742367816",
    "name": "Retro USB 128GB + Joystick Analógico",
    "description": "Pendrive de 128GB con sistema retro.\nUtilizable exclusivamente en PC.\nIncluye joystick analógico con cable.\nCompatible con múltiples consolas clásicas y arcade.\nFácil instalación.\nListo para jugar.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1782133684764",
    "name": "BARTOPS ARCADE",
    "description": "Ancho disponible: 45 cm.\nBotonera laminada.\nSistema con PC interna o Raspberry Pi 3B+.\nPantalla LCD de 17\".\nConfiguración de 6 u 8 botones por jugador.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 1000000,
    "badge": "",
    "category": "otros",
    "addons": [
      {
        "id": "new-1782133745748",
        "name": "Pantalla LCD de 22´´",
        "price": 0
      }
    ]
  },
  {
    "id": "new-1782133844532",
    "name": "HITBOX – CONTROL ARCADE PROFESIONAL",
    "description": "Compatible con PC mediante conexión Plug & Play, listo para conectar y jugar.\n15 botones en total.\nPlaca interna Zero Delay.\nConexión USB Plug & Play para PC.\nPlotter laminado de alta durabilidad.\nConstrucción resistente y terminaciones de calidad\nIdeal para juego competitivo y nivel torneo",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
  },
  {
    "id": "new-1782133948909",
    "name": "HITBOX PRO – CONTROL ARCADE AVANZADO",
    "description": "19 botones en total.\nPlaca interna Zero Delay.\nConexión USB Plug & Play para PC.\nPlotter laminado premium de alta resistencia.\nConstrucción robusta y terminaciones de calidad.\nPensado para uso profesional y competitivo.",
    "images": [
      "assets/images/arcade_classic.png"
    ],
    "basePrice": 0,
    "badge": "",
    "category": "otros",
    "addons": []
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