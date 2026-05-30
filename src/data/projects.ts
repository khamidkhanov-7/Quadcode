export interface Project {
  id: string;
  title: string;
  description: { en: string; ru: string; uz: string };
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'NexaShop E-Commerce',
    description: {
      en: 'Full-featured online store with real-time inventory management, Stripe payments, and AI-powered recommendations.',
      ru: 'Полнофункциональный интернет-магазин с управлением запасами в реальном времени, оплатой Stripe и ИИ-рекомендациями.',
      uz: 'Real vaqt inventarni boshqarish, Stripe to\'lovlar va AI tavsiyalari bilan to\'liq e-commerce platforma.',
    },
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    id: '2',
    title: 'PayFlow Financial Platform',
    description: {
      en: 'Enterprise-grade payment processing platform handling millions of transactions with 99.99% uptime.',
      ru: 'Корпоративная платёжная платформа, обрабатывающая миллионы транзакций с доступностью 99.99%.',
      uz: 'Millionlab tranzaksiyalarni 99.99% ishlash bilan qayta ishlovchi korporativ to\'lov platformasi.',
    },
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Python', 'Kubernetes', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://pay-flow-financial-platform.vercel.app/',
    githubUrl: 'https://github.com/khamidkhanov-7/PayFlow-Financial-Platform.git',
    category: 'Backend',
  },
  {
    id: '3',
    title: 'FoodieGo Mobile App',
    description: {
      en: 'Cross-platform food delivery app with live GPS tracking, driver management, and 50k+ active users.',
      ru: 'Кросс-платформенное приложение доставки еды с GPS трекингом и 50k+ активными пользователями.',
      uz: 'GPS kuzatuv va 50k+ faol foydalanuvchilar bilan cross-platform ovqat yetkazib berish ilovasi.',
    },
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
  },
  {
    id: '4',
    title: 'HealthCore Dashboard',
    description: {
      en: 'Medical analytics dashboard with real-time patient monitoring, data visualizations, and HIPAA compliance.',
      ru: 'Медицинская аналитическая панель с мониторингом пациентов и соответствием HIPAA.',
      uz: 'Real vaqt bemorlarni kuzatish va HIPAA muvofiqlik bilan tibbiy tahlil dashboardi.',
    },
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    id: '5',
    title: 'LogiTrack Logistics',
    description: {
      en: 'End-to-end logistics management system with route optimization, fleet tracking, and automated reporting.',
      ru: 'Комплексная система управления логистикой с оптимизацией маршрутов и автоматической отчётностью.',
      uz: 'Marshrut optimallashtirish va avtomatlashtirilgan hisobot bilan to\'liq logistika boshqaruv tizimi.',
    },
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Kubernetes'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Backend',
  },
  {
    id: '6',
    title: 'FitPulse Wellness App',
    description: {
      en: 'AI-powered fitness app with personalized workout plans, nutrition tracking, and social challenges.',
      ru: 'ИИ-фитнес приложение с персонализированными планами тренировок и социальными челленджами.',
      uz: 'AI asosidagi shaxsiy mashq rejalari va ijtimoiy musobaqalar bilan fitness ilovasi.',
    },
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'HealthKit'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
  },
];
