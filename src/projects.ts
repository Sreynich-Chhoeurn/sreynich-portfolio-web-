export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  caseStudy?: {
    context: string;
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'web-design-ecommerce',
    title: 'Web Design E-commerce',
    description: 'A modern and responsive e-commerce solution developed using HTML and CSS',
    image: '/image_project_web_design.png',
    tags: ['HTML', 'CSS'],
    category: 'Front-End',
    liveUrl: 'https://web-design-iota-one.vercel.app/',
    githubUrl: 'https://github.com/Sreynich-Chhoeurn/web_design',
    featured: true,
    caseStudy: {
      context: 'A front-end project focused on creating a modern shopping experience with responsive HTML and CSS.',
      highlights: [
        'Built responsive layouts for browsing products across screen sizes.',
        'Used structured HTML and CSS to keep the interface consistent.',
        'Prioritized clear product presentation and visual hierarchy.',
      ],
    },
  },
  {
    id: 2,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Responsive portfolio with animations and dark mode',
    image: '/image_project_portfolio.png',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    category: 'Front-End',
    liveUrl: '#',
    githubUrl: 'https://github.com/Sreynich-Chhoeurn/sreynich-portfolio-web-/deployments',
    featured: false,
  },
  {
    id: 3,
    slug: 'weather-app',
    title: 'Weather App',
    description: 'Interactive weather dashboard with charts and forecasts',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    category: 'Front-End',
    liveUrl: 'https://wheatherapp-swart.vercel.app/',
    githubUrl: 'https://github.com/Dyy-Coding/G3-JavaScript-project-Wheather-App',
    featured: false,
  },
  {
    id: 4,
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: '/image_task_management.png',
    tags: ['OOP'],
    category: 'Back-End',
    liveUrl: '#',
    githubUrl: 'https://github.com/Phally-Chheang/Task_Management_App-A7/graphs/contributors',
    featured: true,
    caseStudy: {
      context: 'A collaborative task-management concept centered on organized workflows and real-time updates.',
      highlights: [
        'Modeled the application around clear task-management workflows.',
        'Applied object-oriented programming principles to structure the project.',
        'Designed the experience around collaboration and progress tracking.',
      ],
    },
  },
  {
    id: 5,
    slug: 'pos-system',
    title: 'POS System',
    description: 'Point-of-sale platform for seamless sales, inventory, and payment management',
    image: '/image_pos_system.png',
    tags: ['PHP', 'Database'],
    category: 'Full-Stack',
    liveUrl: 'http://localhost:8080/login',
    githubUrl: 'https://github.com/senghinloem/VC1-G3',
    featured: true,
    caseStudy: {
      context: 'A full-stack point-of-sale platform designed to support sales, inventory, and payment management in one workflow.',
      highlights: [
        'Connected sales workflows with inventory and payment management.',
        'Used PHP and database technologies to support the application flow.',
        'Focused on keeping operational tasks clear and efficient for users.',
      ],
    },
  },
  {
    id: 6,
    slug: 'qr-menu-app',
    title: 'QR Menu App',
    description: 'QR Menu app with a powerful admin panel for managing digital restaurant menus and orders.',
    image: '/image_QR_menu_app.png',
    tags: ['Flutter', 'Laravel', 'Database'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/Samnoeun/Digital_Menu',
    featured: false,
  },
  {
    id: 7,
    slug: 'cloud-hosting-wordpress',
    title: 'Cloud Hosting - WordPress Deployment',
    description: 'Deployed and customized WordPress websites on cloud hosting, ensuring smooth performance and usability.',
    image: '/image_wordpress.png',
    tags: ['AWS', 'Linux Ubuntu', 'MobaXterm', 'WordPress'],
    category: 'Hosting',
    liveUrl: 'http://52.91.90.239/',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 8,
    slug: 'national-internet-governance-forum-2025',
    title: 'National Internet Goverment Forum 2025',
    description: 'The Cambodia IGF website promotes open and inclusive dialogue on internet governance and digital policy in Cambodia.',
    image: '/image_camigf.png',
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'PHP/Laravel', 'WordPress', 'GitHub', 'Figma'],
    category: 'Full-Stack',
    liveUrl: 'https://www.cambodiaigf.kh/',
    githubUrl: 'https://github.com/ODCambodia/camigf',
    featured: true,
    caseStudy: {
      context: 'A public-facing website that promotes open and inclusive dialogue on internet governance and digital policy in Cambodia.',
      highlights: [
        'Contributed to a content-rich platform with an inclusive public purpose.',
        'Worked across front-end, WordPress, and PHP/Laravel technologies.',
        'Used GitHub and Figma within the project workflow.',
      ],
    },
  },
  {
    id: 9,
    slug: 'kd-capital',
    title: 'KD Capital Co., Ltd',
    description: 'KD CAPITAL Co., Ltd is a Cambodian investment company focused on strategic partnerships and long-term growth.',
    image: '/image_capital.png',
    tags: ['WordPress', 'Laragon'],
    category: 'Front-End',
    liveUrl: 'https://kdcapitalgrp.com/',
    githubUrl: '#',
    featured: true,
    caseStudy: {
      context: 'A company website created to communicate the investment company\'s focus on strategic partnerships and long-term growth.',
      highlights: [
        'Presented company information in a clear, professional web experience.',
        'Used WordPress to support maintainable site content.',
        'Worked in a local Laragon development environment.',
      ],
    },
  },
];
