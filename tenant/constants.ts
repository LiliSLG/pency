import {ClientTenant, ServerTenant} from "./types";

export const DEFAULT_CLIENT_TENANT: Omit<ClientTenant, "id" | "slug"> = {
  phone: "5491173694572",
  color: "cyan",
  title: "Pency - Tu tienda online fácil",
  description: "Armá tu tienda y recibí los pedidos via WhatsApp",
  instagram: "",
  facebook: "",
  twitter: "",
  logo: "",
  banner: "",
  category: "",
  highlight: "",
  fields: [],
  keywords: "pency, tienda, online, whatsapp, delivery, pedidos",
  mercadopago: false,
};

export const DEFAULT_SERVER_TENANT: Omit<ServerTenant, "id" | "slug"> = {
  ...DEFAULT_CLIENT_TENANT,
  mercadopago: {
    token: "",
    refresh: "",
    expiration: null,
  },
};

export const CATEGORIES = [
  "Accesorios para vehículos",
  "Almacén / Kiosco",
  "Arte / Artesanías",
  "Artículos para bebés",
  "Artículos para mascotas",
  "Autoservicio / Minimercado",
  "Bar",
  "Belleza y cuidado personal",
  "Bicicletería",
  "Calzado",
  "Carnicería",
  "Carpintería",
  "Centro de salud",
  "Cerrajería",
  "Chocolatería",
  "Comida rápida",
  "Concesionaria",
  "Cooperativa",
  "Cotillón",
  "Delivery",
  "Dietética",
  "Electrodomésticos",
  "Establecimiento educativo",
  "Estacionamiento",
  "Fábrica de pastas",
  "Ferretería",
  "Flete",
  "Gomería / Taller mecánico",
  "Heladería",
  "Herramientas y construcción",
  "Herrería y carpintería",
  "Hipermercado / Mayorista",
  "Hogar y decoración",
  "Iluminación",
  "Imprenta",
  "Informática",
  "Inmobiliaria",
  "Instrumentos musicales",
  "Jardinería",
  "Joyería y relojería",
  "Juegos y juguetes",
  "Lavadero de autos",
  "Librería",
  "Lubricentro",
  "Máquinas expendedoras",
  "Marroquinería, cueros y pieles",
  "Motos",
  "Mueblería",
  "Óptica",
  "Organización de eventos",
  "Organización sin fines de lucro",
  "Panadería",
  "Peluquería",
  "Perfumería",
  "Pesca y camping",
  "Pescadería",
  "Pinturería",
  "Restaurante",
  "Ropa y accesorios",
  "Salud / Farmacia",
  "Servicio de diseño y publicidad",
  "Servicio de fotografía",
  "Servicio de reparación de articulos electrónicos",
  "Servicio informático",
  "Servicios de mensajerías.",
  "Servicios de salud",
  "Servicios para el hogar",
  "Servicios profesionales",
  "Supermercado",
  "Teatro",
  "Telefonía y electrónica",
  "Tintorerías y lavadero",
  "Transporte de pasajeros",
  "Venta de autopartes y talleres",
  "Venta de productos de granja",
  "Verdulería",
  "Veterinaria",
  "Viajes y turismo",
  "Vinoteca",
  "Vivero / Florería",
];

export const COUNTRIES = [
  {name: "Argentina", code: "AR"},
  {name: "Brazil", code: "BR"},
  {name: "Colombia", code: "CO"},
  {name: "Cuba", code: "CU"},
  {name: "Ecuador", code: "EC"},
  {name: "México", code: "MX"},
  {name: "Paraguay", code: "PY"},
  {name: "Perú", code: "PE"},
  {name: "España", code: "ES"},
  {name: "United States", code: "US"},
  {name: "Uruguay", code: "UY"},
  {name: "Venezuela", code: "VE"},
];
