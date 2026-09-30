// Все данные клиента — здесь. Фотографии — в public/images.
export const business = {
  name: "BLACK BARBER",
  shortName: "BB",
  category: "Барбершоп",
  city: "Алматы",
  founded: "2019",
  slogan: "Характер начинается с деталей.",
  description:
    "Точные стрижки. Чистые линии. Твой стиль. Пространство для мужчин, которые ценят своё время и внимание к деталям.",
  phone: "+7 (700) 000-00-00",
  whatsapp: "77000000000",
  bookingMessage: "Здравствуйте! Хочу записаться в {name}.",
  instagram: "https://www.instagram.com/",
  instagramLabel: "@blackbarber.demo",
  address: "ул. Панфилова, 92",
  addressNote: "Алматы · вход с улицы, 1 этаж",
  hours: "Ежедневно, 10:00–21:00",
  map: {
    latitude: 43.2615,
    longitude: 76.9458,
    url: "https://www.google.com/maps/search/?api=1&query=43.2615,76.9458",
    embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=76.938%2C43.257%2C76.954%2C43.266&layer=mapnik&marker=43.2615%2C76.9458",
  },
  seo: {
    url: "https://example.com",
    title: "BLACK BARBER — мужские стрижки и борода в Алматы",
    description:
      "Барбершоп BLACK BARBER в Алматы. Мужские стрижки от 5 000 ₸, оформление бороды и индивидуальный подход. Запись через WhatsApp.",
    indexable: false,
    locale: "ru_KZ",
  },
  photos: { hero: "/images/hero.jpg", about: "/images/interior.jpg" },
  stats: [
    { value: "4.9", label: "рейтинг гостей" },
    { value: "500+", label: "постоянных клиентов" },
    { value: "7 лет", label: "в своём деле" },
  ],
  about: {
    title: "Больше, чем\nпросто стрижка.",
    text: "Здесь можно выдохнуть, выпить кофе и довериться мастеру. Мы не гонимся за трендами — находим форму, которая подходит именно тебе.",
    detail:
      "Обсудим образ, подберём длину и покажем, как укладывать волосы дома. Без спешки. С вниманием к каждой линии.",
  },
  currency: "₸",
  services: [
    {
      id: "haircut",
      name: "Мужская стрижка",
      description: "Консультация, мытьё, стрижка и укладка",
      price: 5000,
      duration: "60 мин",
      featured: false,
    },
    {
      id: "combo",
      name: "Стрижка + борода",
      description: "Полный образ: от формы до финального штриха",
      price: 7500,
      duration: "90 мин",
      featured: true,
    },
    {
      id: "beard",
      name: "Оформление бороды",
      description: "Архитектура формы и чёткие контуры",
      price: 3000,
      duration: "30 мин",
      featured: false,
    },
    {
      id: "kids",
      name: "Детская стрижка",
      description: "Для юных джентльменов от 6 до 12 лет",
      price: 4000,
      duration: "45 мин",
      featured: false,
    },
    {
      id: "gray",
      name: "Камуфляж седины",
      description: "Естественный оттенок без резкого контраста",
      price: 4500,
      duration: "30 мин",
      featured: false,
    },
  ],
  masters: [
    {
      name: "Алан",
      role: "Топ-барбер",
      experience: "7 лет опыта",
      description:
        "Классические формы, точный фейд и стрижки, которые легко укладывать.",
      photo: "/images/master-1.jpg",
    },
    {
      name: "Тимур",
      role: "Барбер",
      experience: "5 лет опыта",
      description:
        "Текстурные стрижки, оформление бороды и внимание к твоему характеру.",
      photo: "/images/master-2.jpg",
    },
    {
      name: "Марк",
      role: "Барбер",
      experience: "4 года опыта",
      description:
        "Современные формы, длинные волосы и непринуждённая атмосфера.",
      photo: "/images/master-3.jpg",
    },
  ],
  benefits: [
    {
      icon: "scissors",
      title: "Руки, которым доверяют",
      text: "Мастера с опытом и своим почерком. Сначала слушаем, потом стрижём.",
    },
    {
      icon: "sparkles",
      title: "Ничего случайного",
      text: "Профессиональный уход, чистые инструменты и внимание к мелочам.",
    },
    {
      icon: "map",
      title: "В ритме города",
      text: "В центре Алматы. Удобно заглянуть до работы или после встречи.",
    },
    {
      icon: "coffee",
      title: "Твоё время для себя",
      text: "Хороший кофе, любимая музыка и час без городской суеты.",
    },
  ],
  gallery: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Мужская стрижка: аккуратная форма и текстура",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Работа барбера над деталями стрижки",
    },
    { src: "/images/interior.jpg", alt: "Рабочие места и интерьер барбершопа" },
  ],
  reviews: [
    {
      name: "Данияр К.",
      date: "12 августа 2026",
      rating: 5,
      text: "Наконец нашёл своего мастера. Алан понял, что я хочу, с первого раза. Стрижка отлично лежит даже без укладки.",
    },
    {
      name: "Александр М.",
      date: "3 августа 2026",
      rating: 5,
      text: "Хожу на стрижку и бороду. Всегда вовремя, без суеты. Отдельный плюс за атмосферу и хороший кофе.",
    },
    {
      name: "Руслан А.",
      date: "27 июля 2026",
      rating: 5,
      text: "Привёл сына, теперь ходим вместе. Спокойно, аккуратно, с вниманием. Именно то место, куда хочется возвращаться.",
    },
  ],
  cta: {
    title: "Твой следующий\nхороший образ.",
    text: "Выбери удобное время. Остальное — наша работа.",
  },
} as const;
export const navigation = [
  { href: "#home", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#masters", label: "Мастера" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];
