
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software',
    title: 'Software Development',
    description: 'Bespoke applications built for scalability and performance.',
    details: ['React, Next.js, Angular', 'Node.js, Express, Laravel', 'Python, Go', 'Mobile (React Native, Flutter)'],
    icon: 'Terminal'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Modern infrastructure management and cloud-native strategies.',
    details: ['AWS, Azure, GCP', 'Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture'],
    icon: 'Cloud'
  },
  {
    id: 'devops',
    title: 'DevOps Services',
    description: 'Automated pipelines and reliable release management.',
    details: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Terraform & Ansible', 'Workflow Automation'],
    icon: 'Settings'
  },
  {
    id: 'consultant',
    title: 'Application Consultant',
    description: 'Strategic planning for complex enterprise systems.',
    details: ['Jira, Shopify', 'WordPress & WooCommerce', 'Digital Transformation', 'Tech Stack Audit'],
    icon: 'ShieldCheck'
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'High-fidelity designs that command user attention.',
    details: ['Interface Design', 'Mobile App Design', 'Design Systems', 'Figma Prototyping'],
    icon: 'Layout'
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'Marketing and advertising design for digital impact.',
    details: ['Marketing Design', 'Digital Web Graphics', 'Brand Systems', 'Print & Publication'],
    icon: 'Palette'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'bigasan-hub',
    title: 'Bigasan Hub',
    subtitle: 'Inventory Management System',
    description: 'A comprehensive solution designed to tackle complex inventory challenges in high-volume retail.',
    impacts: [
      'Reduced Stock Shortages by 40%',
      'Lower Inventory Carrying Costs',
      'Real-Time Visibility across nodes',
      'Improved Fulfillment Speed',
      'Increased Operational Efficiency'
    ],
    imageUrl: 'https://picsum.photos/seed/inventory/1200/800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'israel-alin',
    quote: "Limehills didn't just rebuild our brand; they gave it a soul that commands attention. Their technical depth matched their creative vision perfectly.",
    author: 'Israel Alin',
    position: 'CEO, Alin Group',
    imageUrl: 'https://picsum.photos/seed/ceo/400/400'
  }
];
