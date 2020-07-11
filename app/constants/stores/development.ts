export const TENANT = {
  mercadopago: true,
  hook: "",
  flags: ["mercadopago"],
  fields: [
    {
      title: "Nombre completo",
      note: "Quien va a recibir el pedido?",
      required: false,
      id: "epAOGrCKe",
      type: "text",
    },
    {
      required: false,
      id: "5zSCMM-8V",
      type: "radio",
      title: "Tipo de envio",
      options: [
        {note: "$50-$75 según distancia", id: "klzHT7_aU2", title: "Delivery"},
        {id: "sRtwGO87i5", title: "Take Away", note: "Sin cargo"},
      ],
    },
    {
      note: "Incluí calle, altura y departamento",
      required: false,
      id: "ehccyo0z_",
      type: "text",
      title: "Dirección de envio",
    },
    {
      required: true,
      id: "lP69lQ8f4",
      type: "radio",
      title: "Forma de pago",
      options: [
        {note: "20% OFF", id: "2FcWRdWPrP", title: "Efectivo"},
        {note: "10% OFF", id: "iq8cgWDhy9", title: "Transferencia"},
        {note: "", id: "mwW587OYO", title: "Mercado Pago"},
      ],
    },
    {
      note: "Notas al restaurante",
      required: false,
      id: "HRyVlm1Bj",
      type: "text",
      title: "¿Querés aclarar algo?",
    },
  ],
  layout: "portrait",
  highlight: "Enviamos de Lunes a Viernes de 19hs. - 24hs.",
  location: {
    address: "Av. Eduardo Madero 470, C1106 ACR, Buenos Aires, Argentina",
    coordinates: {lat: -34.6021563, lng: -58.3684163},
    visibility: "available",
  },
  country: "AR",
  description: "Galardonada pizza estilo New Haven en Palermo SOHO.",
  banner:
    "https://res.cloudinary.com/goncy/image/upload/v1589912646/pency/y0vy0hpyz5m1echx0het.jpg",
  keywords: "pency, tienda, online, whatsapp, delivery, pedidos",
  twitter: "urbn.catering",
  facebook: "urbn.catering",
  instagram: "urbn.catering",
  title: "URBN Catering",
  logo: "https://res.cloudinary.com/goncy/image/upload/v1589227501/pency/hgfmoqbvrqxw0ugxvkxx.jpg",
  phone: "5491173694572",
  color: "teal",
  category: "fast-food",
  slug: "demo",
  id: "abqWe6PdFXcJoOrSj8oRRFRmq2g1",
  address: "Av. Eduardo Madero 470, CABA",
};

export const PRODUCTS = [
  {
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589484889/pency/ynoxuxdiczhsrarfmgnl.jpg",
    featured: false,
    description: "Deliciosas con opción de multiples salsas, y con parmesano rayado fresco.",
    category: "Entradas",
    options: [
      {
        options: [
          {id: "ITaNaIX4Nd", title: "Regular", price: 0},
          {title: "Barbacoa", price: 20, id: "7zg6DTASz"},
          {id: "S0IUcJWr9", title: "Bien picante", price: 20},
          {title: "Búfalo", price: 0, id: "BRdkwFvm_"},
        ],
        count: 1,
        required: true,
        value: [],
        title: "Elegí tu salsa",
        id: "GgkHWngsx",
      },
    ],
    price: 250,
    title: "Alitas de pollo a la carbonara",
    available: true,
    id: "1uKZzb5BiOeS8726goHw",
    subcategory: "",
    visibility: "available",
  },
  {
    category: "Ensaladas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589486001/pency/biujlwqx8bvhbwqk3z2v.jpg",
    price: 320,
    description: "Vegetales de campo, pera, gorgonzola, nuez quebradiza y vinagreta de la casa.",
    title: "Ensalada URBN",
    available: true,
    options: [
      {
        options: [
          {title: "Pollo", price: 0, id: "4xd-TgyxCd"},
          {id: "CbWt6N2ye", title: "Cerdo", price: 45},
        ],
        required: true,
        id: "255h5UL0u",
        count: 1,
        value: [],
        title: "Elegir proteina",
      },
    ],
    subcategory: "",
    featured: false,
    id: "58OxoUgIfkzGqhWCqS6g",
    visibility: "available",
  },
  {
    featured: false,
    category: "Ensaladas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589485592/pency/awqiq7wygzmoqshdgcjn.jpg",
    price: 300,
    title: "Ensalada italiana picada",
    description:
      "Lechuga con achicoria, salami, tomate, cebolla, garbanzos, pepperoncini, parmesano y vinagreta.",
    available: true,
    options: [
      {
        title: "Elegir Carne",
        options: [
          {price: 0, id: "i9uEMZrW0N", title: "Pollo"},
          {id: "cqQgoegI9", title: "Cerdo", price: 50},
          {title: "Langostinos", price: 50, id: "p3pMW7X8y"},
          {price: 100, id: "dteZylU6i", title: "Salmón fresco"},
        ],
        required: true,
        id: "q5pNppL0z",
        count: 1,
        value: [],
      },
      {
        required: false,
        id: "_Dk5JmDfa",
        count: 2,
        value: [],
        title: "Elegir Queso",
        options: [
          {price: 0, id: "Pvy-oG-9Lg", title: "Gouda"},
          {id: "7iIhUAXOR4", title: "Grouyere", price: 0},
          {title: "Fontina", price: 60, id: "-zi20KiJg"},
          {id: "_9slk-B3a7", title: "Roquefort", price: 120},
        ],
      },
    ],
    subcategory: "",
    id: "A3ZFNnnz1NWExNodmKUy",
    visibility: "available",
  },
  {
    featured: false,
    category: "Entradas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1590719481/pency/demo/qlfcr0tmuq3efad9gdy2.jpg",
    price: 300,
    description: "Pimiento rojo, ajo, limón, perejil, chile y aceite de oliva.",
    title: "Dip de frijoles italianos",
    available: false,
    subcategory: "",
    options: [],
    id: "Hu9B15C6o3kFGyOuexJi",
    visibility: "available",
  },
  {
    featured: false,
    category: "Pizzas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589495233/pency/smany1z57pwvq1zqueok.jpg",
    price: 550,
    description: "",
    title: "Pizza de Jalapeños",
    available: true,
    subcategory: "",
    options: [],
    id: "MMk4HufUpHyRLSM9fIvB",
    visibility: "available",
  },
  {
    description:
      "Tomate, pepino, cebolla roja, mozzarella fresca, picatostes, albahaca y vinagreta de vino tinto.",
    title: "Ensalada Caprezanella",
    available: true,
    subcategory: "",
    options: [],
    featured: false,
    category: "Ensaladas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589485873/pency/ffztrxszbauvihsgnjgq.jpg",
    price: 280,
    id: "STf3EmXOoOav31P5aNTR",
    visibility: "available",
  },
  {
    description: "Salsa dominical, ricota, parmesano, albahaca con un rico baguette.",
    title: "Albondigas",
    available: true,
    subcategory: "",
    options: [],
    featured: false,
    category: "Entradas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589485297/pency/kvnbnf3lk1uvigtr1rai.jpg",
    price: 250,
    id: "YtkgfZmaj1LyLQbBPAiq",
    visibility: "available",
  },
  {
    featured: false,
    category: "Pizzas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589496946/pency/llmr5eskjiixohttlpav.jpg",
    price: 480,
    title: "Pizza de albóndigas",
    description: "Salsa de tomate, albóndigas, ricota, albahaca, provolone y parmesano.",
    available: true,
    subcategory: "",
    options: [],
    id: "gLStgmKD5nkfGpavvcXw",
    visibility: "available",
  },
  {
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1590719542/pency/demo/unxkyxtehixx6obhiz31.jpg",
    price: 450,
    description:
      "Gruyere, manchego y azul cambiante. Prosciutto y salami a la pimienta. Pan, aceitunas, miel y peras en rodajas.",
    title: "Tabla de Queso y Carne",
    available: false,
    subcategory: "",
    options: [],
    featured: false,
    category: "Entradas",
    id: "nb1AFKAZLz4MlzGfhC8U",
    visibility: "available",
  },
  {
    title: "Pizza Cuatro Quesos",
    description: "Roquefort, Pategras, Mozzarella & Sardo",
    available: true,
    subcategory: "",
    options: [],
    featured: false,
    category: "Pizzas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589496886/pency/zzrbyvvjvtb7jlacwfbv.jpg",
    price: 570,
    id: "p7BdDZ6fYJnULLalA7wn",
    visibility: "available",
  },
  {
    featured: false,
    category: "Pizzas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1592432148/pency/demo/sawkkzw04qoha7ylcetm.jpg",
    price: 520,
    description: "Salsa de tomate, albahaca fresca, mozzarella fresca y parmesano.",
    title: "Pizza Margarita",
    available: true,
    options: [
      {
        title: "Elegir Adicionales",
        options: [
          {title: "Aceitunas", price: 20, id: "VRjVCMwiVW"},
          {title: "Ajo", price: 20, id: "GOVY144ljf"},
          {price: 45, id: "q0_gnf2Yj", title: "Anchoas"},
          {id: "H8eiTAHxU", title: "Cebolla blanca", price: 20},
          {id: "KXAF2o6QQ", title: "Huevo", price: 45},
          {title: "Morrones", price: 45, id: "YJVg_Xo7m"},
          {id: "qqpz_b1NqL", title: "Pesto", price: 20},
          {price: 45, id: "Cltdo4ev4", title: "Salchica"},
        ],
        required: false,
        id: "_Sj-SoLbF",
        count: 0,
        value: [],
      },
    ],
    id: "qcpouqANTtXFe7n0QAaj",
    visibility: "available",
  },
  {
    featured: false,
    category: "Entradas",
    image:
      "https://res.cloudinary.com/goncy/image/upload/v1589485095/pency/sgis7jam4mcbqansseub.jpg",
    price: 260,
    description: "Panceta, glaseado balsámico, gorgonzola, parmesano fresco.",
    title: "Coles de Bruselas crujientes",
    available: true,
    options: [
      {
        options: [
          {id: "dqYYEhc-uI", title: "Fontina", price: 0},
          {title: "Gruyere", price: 0, id: "IM78j4RbyK"},
          {price: 40, id: "kjjOk_J_j", title: "Gouda"},
          {id: "rvbPq3m1s", title: "Roquefort", price: 90},
        ],
        required: false,
        id: "XTEog31LJ",
        count: 3,
        value: [],
        title: "Elegir Queso",
      },
    ],
    subcategory: "",
    id: "uaAtcZsesGjwaPPiOUhW",
    visibility: "available",
  },
];
