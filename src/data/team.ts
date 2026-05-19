export interface TeamMember {
  id: string;
  name: string;
  role: { en: string; ru: string; uz: string };
  bio: { en: string; ru: string; uz: string };
  photo: string;
  skills: { name: string; level: number }[];
  technologies: string[];
  experience: {
    year: string;
    title: { en: string; ru: string; uz: string };
    company: string;
    desc: { en: string; ru: string; uz: string };
  }[];
  certificates: { name: string; issuer: string; year: string }[];
  projects: { name: string; tech: string[]; desc: { en: string; ru: string; uz: string } }[];
  clientReviews: { author: string; text: { en: string; ru: string; uz: string }; rating: number }[];
  social: { telegram: string; instagram: string; github: string };
}

export const team: TeamMember[] = [
  {
    id: 'amir',
    name: 'Qakharov Tokhir',
    role: { en: 'Frontend Developer', ru: 'Frontend разработчик', uz: 'Frontend Dasturchi' },
    bio: {
      en: 'Crafting pixel-perfect interfaces with 4+ years of React expertise. Passionate about performance and accessibility.',
      ru: 'Создаю интерфейсы до пикселя с 4+ годами опыта React. Увлечён производительностью и доступностью.',
      uz: '4+ yillik React tajribasi bilan mukammal interfeyslar yaratuvchi. Mahsuldorlik va qulaylikka ishtiyoqli.',
    },
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Testing (Jest/Cypress)', level: 80 },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'GraphQL', 'Redux'],
    experience: [
      {
        year: '2022 – Present',
        title: { en: 'Senior Frontend Developer', ru: 'Senior Frontend разработчик', uz: 'Senior Frontend Dasturchi' },
        company: 'QuadCode',
        desc: {
          en: 'Leading frontend architecture and mentoring junior developers.',
          ru: 'Руководство фронтенд архитектурой и наставничество.',
          uz: 'Frontend arxitekturasiga rahbarlik va yosh dasturchilarni mentoring qilish.',
        },
      },
      {
        year: '2020 – 2022',
        title: { en: 'Frontend Developer', ru: 'Frontend разработчик', uz: 'Frontend Dasturchi' },
        company: 'TechStart Namangan',
        desc: {
          en: 'Built responsive dashboards and e-commerce platforms.',
          ru: 'Разрабатывал адаптивные дашборды и e-commerce платформы.',
          uz: 'Moslashuvchan dashboardlar va e-commerce platformalar yaratdi.',
        },
      },
    ],
    certificates: [
      { name: 'Meta Frontend Developer', issuer: 'Coursera', year: '2022' },
      { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' },
    ],
    projects: [
      {
        name: 'NexaShop E-Commerce',
        tech: ['Next.js', 'TypeScript', 'Stripe'],
        desc: {
          en: 'Full-featured e-commerce platform with real-time inventory.',
          ru: 'Полнофункциональная e-commerce платформа.',
          uz: 'To\'liq funksiyali e-commerce platforma.',
        },
      },
      {
        name: 'DataViz Dashboard',
        tech: ['React', 'D3.js', 'WebSockets'],
        desc: {
          en: 'Real-time analytics dashboard for enterprise clients.',
          ru: 'Дашборд аналитики в реальном времени.',
          uz: 'Real vaqt tahlil dashboardi.',
        },
      },
    ],
    clientReviews: [
      {
        author: 'Sarah M.',
        text: {
          en: 'Amir delivered exceptional work. The UI is beautiful and lightning fast.',
          ru: 'Амир выполнил отличную работу. UI красивый и быстрый.',
          uz: 'Amir ajoyib ish qildi. UI chiroyli va tez.',
        },
        rating: 5,
      },
    ],
    social: {
      telegram: 'https://t.me/amirkarimov',
      instagram: 'https://instagram.com/amirkarimov',
      github: 'https://github.com/amirkarimov',
    },
  },
  {
    id: 'daniil',
    name: 'Khasanbayev Sobitkhon',
    role: { en: 'Backend Developer', ru: 'Backend разработчик', uz: 'Backend Dasturchi' },
    bio: {
      en: 'Building scalable APIs and microservices with 5+ years in Node.js and Python. Security-first mindset.',
      ru: 'Создаю масштабируемые API и микросервисы, 5+ лет с Node.js и Python. Приоритет безопасности.',
      uz: '5+ yillik Node.js va Python tajribasi bilan kengaytiriladigan API va mikroservislar qurvchi.',
    },
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: [
      { name: 'Node.js / Express', level: 95 },
      { name: 'Python / FastAPI', level: 90 },
      { name: 'PostgreSQL / Redis', level: 88 },
      { name: 'Docker / Kubernetes', level: 85 },
      { name: 'System Architecture', level: 87 },
    ],
    technologies: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Supabase'],
    experience: [
      {
        year: '2021 – Present',
        title: { en: 'Lead Backend Developer', ru: 'Lead Backend разработчик', uz: 'Lead Backend Dasturchi' },
        company: 'QuadCode',
        desc: {
          en: 'Designing and implementing high-performance backend systems.',
          ru: 'Проектирование высокопроизводительных бэкенд систем.',
          uz: 'Yuqori samarali backend tizimlarini loyihalash.',
        },
      },
      {
        year: '2019 – 2021',
        title: { en: 'Backend Developer', ru: 'Backend разработчик', uz: 'Backend Dasturchi' },
        company: 'CloudSoft',
        desc: {
          en: 'Developed REST APIs for fintech applications.',
          ru: 'Разработал REST API для финтех приложений.',
          uz: 'Fintech ilovalar uchun REST API ishlab chiqdi.',
        },
      },
    ],
    certificates: [
      { name: 'AWS Solutions Architect', issuer: 'Amazon', year: '2022' },
      { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
    ],
    projects: [
      {
        name: 'PayFlow API',
        tech: ['Node.js', 'PostgreSQL', 'Redis'],
        desc: {
          en: 'High-throughput payment processing API handling 10k+ req/sec.',
          ru: 'API обработки платежей с 10k+ запросов/сек.',
          uz: '10k+ so\'rov/soniyani qayta ishlovchi to\'lov API.',
        },
      },
      {
        name: 'LogiTrack Backend',
        tech: ['Python', 'FastAPI', 'Docker'],
        desc: {
          en: 'Logistics tracking microservices architecture.',
          ru: 'Микросервисная архитектура для логистики.',
          uz: 'Logistika kuzatuv mikroservis arxitekturasi.',
        },
      },
    ],
    clientReviews: [
      {
        author: 'Alex T.',
        text: {
          en: 'Daniil built a rock-solid API that handles our peak traffic flawlessly.',
          ru: 'Даниил создал надёжный API, справляющийся с пиковой нагрузкой.',
          uz: 'Daniil bizning yuqori yuklamani mukammal qabul qiluvchi API yaratdi.',
        },
        rating: 5,
      },
    ],
    social: {
      telegram: 'https://t.me/daniilpetrov',
      instagram: 'https://instagram.com/daniilpetrov',
      github: 'https://github.com/daniilpetrov',
    },
  },
  
  {
  "id": "mukhammadzokhid",
  "name": "Khamidkhanov Mukhammadzokhid",
  "role": {
    "en": "Fullstack & Mobile Developer",
    "ru": "Fullstack и мобильный разработчик",
    "uz": "Fullstack va Mobil Dasturchi"
  },
  "bio": {
    "en": "Fullstack & mobile developer with 3+ years of experience in scalable web applications and 2+ years specializing in native mobile UI/UX design and implementation.",
    "ru": "Fullstack и мобильный разработчик с опытом более 3 лет в создании масштабируемых веб-приложений и более 2 лет специализации на дизайне и реализации нативного мобильного UI/UX.",
    "uz": "Fullstack va mobil dasturchi, 3+ yillik veb-ilovalar va 2+ yil native mobil UI/UX dizayn va amaliyot tajribasiga ega."
  },
  "photo": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  "skills": [
    { "name": "React / Next.js", "level": 93 },
    { "name": "Node.js / Express", "level": 90 },
    { "name": "TypeScript", "level": 88 },
    { "name": "PostgreSQL / MongoDB", "level": 82 },
    { "name": "React Native", "level": 85 },
    { "name": "Native Mobile UI/UX", "level": 88 }
  ],
  "technologies": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Redis",
    "React Native",
    "Prisma",
    "GraphQL",
    "Figma",
    "SwiftUI",
    "Kotlin",
    "Flutter"
  ],
  "experience": [
    {
      "year": "2022 – Present",
      "title": {
        "en": "Fullstack & Mobile Developer",
        "ru": "Fullstack и мобильный разработчик",
        "uz": "Fullstack va Mobil Dasturchi"
      },
      "company": "QuadCode",
      "desc": {
        "en": "Developing end-to-end web and mobile applications with modern frontend, scalable backend, and high-quality native mobile UI/UX.",
        "ru": "Разработка полного цикла веб и мобильных приложений с современным фронтендом, масштабируемым бэкендом и качественным нативным UI/UX.",
        "uz": "Zamonaviy frontend, kengaytiriladigan backend va sifatli native mobil UI/UX bilan to‘liq veb va mobil ilovalar yaratish."
      }
    },
    {
      "year": "2022 – 2024",
      "title": {
        "en": "Native Mobile UI/UX Specialist",
        "ru": "Специалист по нативному мобильному UI/UX",
        "uz": "Native Mobil UI/UX Mutaxassisi"
      },
      "company": "Designly / AppWorks",
      "desc": {
        "en": "Designed and implemented native mobile interfaces for iOS and Android, focusing on pixel-perfect UI and smooth user experience.",
        "ru": "Проектирование и реализация нативных мобильных интерфейсов для iOS и Android с фокусом на идеальный UI и плавный UX.",
        "uz": "iOS va Android uchun native mobil interfeyslarni loyihalash va amalga oshirish, mukammal UI va silliq foydalanuvchi tajribasiga e'tibor."
      }
    },
    {
      "year": "2021 – 2022",
      "title": {
        "en": "Junior Fullstack Developer",
        "ru": "Junior Fullstack разработчик",
        "uz": "Junior Fullstack Dasturchi"
      },
      "company": "AppWorks",
      "desc": {
        "en": "Built and maintained features across the full stack for client-facing web products, while learning mobile UI/UX principles.",
        "ru": "Разрабатывал и поддерживал функционал по всему стеку для веб-продуктов клиентов, изучая принципы мобильного UI/UX.",
        "uz": "Mijozlarga yo‘naltirilgan veb-mahsulotlar uchun full stack bo‘ylab funksiyalar yaratdi va mobil UI/UX tamoyillarini o‘rgandi."
      }
    }
  ],
  "certificates": [
    { "name": "Node.js Advanced Concepts", "issuer": "Udemy", "year": "2022" },
    { "name": "React & TypeScript Specialist", "issuer": "Codecademy", "year": "2023" },
    { "name": "Mobile UI/UX Design Masterclass", "issuer": "Interaction Design Foundation", "year": "2023" }
  ],
  "projects": [
    {
      "name": "ShopFlow Platform",
      "tech": ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      "desc": {
        "en": "E-commerce platform with real-time inventory management — 10k+ active users.",
        "ru": "Платформа электронной коммерции с управлением запасами в реальном времени — 10k+ пользователей.",
        "uz": "Real vaqtda inventar boshqaruvi bilan e-commerce platforma — 10k+ faol foydalanuvchilar."
      }
    },
    {
      "name": "TaskBoard Pro",
      "tech": ["React", "Express", "MongoDB", "Socket.io"],
      "desc": {
        "en": "Real-time project management tool with team collaboration features.",
        "ru": "Инструмент управления проектами в реальном времени с функциями командной работы.",
        "uz": "Jamoa hamkorligi xususiyatlari bilan real vaqtdagi loyiha boshqaruv vositasi."
      }
    },
    {
      "name": "NativeFit — Mobile Fitness App",
      "tech": ["React Native", "SwiftUI", "Figma", "Firebase"],
      "desc": {
        "en": "Cross-platform fitness app with native-like UI/UX, custom animations, and real-time workout tracking.",
        "ru": "Кроссплатформенное фитнес-приложение с нативным UI/UX, собственными анимациями и отслеживанием тренировок в реальном времени.",
        "uz": "Native-like UI/UX, maxsus animatsiyalar va real vaqtda mashqlar kuzatuvi bilan kross-platforma fitnes ilovasi."
      }
    }
  ],
  "clientReviews": [
    {
      "author": "Sardor T.",
      "text": {
        "en": "Mukhammadzokhid delivered a robust fullstack solution on time with clean, well-documented code and added a polished mobile UI/UX layer.",
        "ru": "Мухаммадзохид сдал надёжное fullstack решение вовремя с чистым и документированным кодом, добавив отличный мобильный UI/UX.",
        "uz": "Mukhammadzokhid vaqtida toza va hujjatlashtirilgan kod bilan ishonchli fullstack yechim taqdim etdi va mobil UI/UX qatlamini yaxshiladi."
      },
      "rating": 5
    }
  ],
  "social": {
    "telegram": "https://t.me/mukhammadzokhid",
    "instagram": "https://instagram.com/mukhammadzokhid",
    "github": "https://github.com/mukhammadzokhid"
  }

  }
]
