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
    name: 'Amir Karimov',
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
        company: 'TechStart Tashkent',
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
    name: 'Daniil Petrov',
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
    id: 'zara',
    name: 'Zara Yusupova',
    role: { en: 'Mobile Developer', ru: 'Mobile разработчик', uz: 'Mobil Dasturchi' },
    bio: {
      en: 'Specialising in React Native & Flutter with 3+ years building delightful cross-platform mobile apps.',
      ru: 'Специализируюсь на React Native и Flutter, 3+ года создаю мобильные приложения.',
      uz: '3+ yillik React Native va Flutter tajribasi bilan cross-platform mobil ilovalar yaratuvchi.',
    },
    photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: [
      { name: 'React Native', level: 93 },
      { name: 'Flutter / Dart', level: 88 },
      { name: 'iOS / Swift', level: 75 },
      { name: 'Android / Kotlin', level: 78 },
      { name: 'UI/UX Design', level: 85 },
    ],
    technologies: ['React Native', 'Flutter', 'Dart', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'Figma', 'Redux'],
    experience: [
      {
        year: '2022 – Present',
        title: { en: 'Mobile Developer', ru: 'Mobile разработчик', uz: 'Mobil Dasturchi' },
        company: 'QuadCode',
        desc: {
          en: 'Building cross-platform mobile apps for iOS and Android.',
          ru: 'Разработка кросс-платформенных приложений для iOS и Android.',
          uz: 'iOS va Android uchun cross-platform mobil ilovalar yaratish.',
        },
      },
      {
        year: '2021 – 2022',
        title: { en: 'Junior Mobile Developer', ru: 'Junior Mobile разработчик', uz: 'Junior Mobil Dasturchi' },
        company: 'AppWorks',
        desc: {
          en: 'Developed features for consumer-facing mobile applications.',
          ru: 'Разрабатывала функционал для мобильных приложений.',
          uz: 'Iste\'molchi ilovalar uchun funksiyalar ishlab chiqdi.',
        },
      },
    ],
    certificates: [
      { name: 'Flutter Development Bootcamp', issuer: 'Udemy', year: '2022' },
      { name: 'React Native Specialist', issuer: 'Codecademy', year: '2023' },
    ],
    projects: [
      {
        name: 'FoodieGo App',
        tech: ['React Native', 'Firebase', 'Stripe'],
        desc: {
          en: 'Food delivery app with real-time order tracking — 50k+ downloads.',
          ru: 'Приложение доставки еды с 50k+ загрузок.',
          uz: 'Ovqat yetkazib berish ilovasi — 50k+ yuklab olishlar.',
        },
      },
      {
        name: 'FitPulse Wellness',
        tech: ['Flutter', 'Firebase', 'HealthKit'],
        desc: {
          en: 'Fitness tracking app with AI-powered workout recommendations.',
          ru: 'Фитнес-трекер с ИИ рекомендациями тренировок.',
          uz: 'AI asosidagi mashq tavsiyalari bilan fitness tracker.',
        },
      },
    ],
    clientReviews: [
      {
        author: 'Mark L.',
        text: {
          en: 'Zara delivered our app ahead of schedule with stunning animations.',
          ru: 'Зара сдала приложение раньше срока с потрясающими анимациями.',
          uz: 'Zara ilovamizni muddatidan oldin ajoyib animatsiyalar bilan topshirdi.',
        },
        rating: 5,
      },
    ],
    social: {
      telegram: 'https://t.me/zarayusupova',
      instagram: 'https://instagram.com/zarayusupova',
      github: 'https://github.com/zarayusupova',
    },
  },
];
