import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'kisisel-portfolyo',
    title: 'Kişisel Portfolyo Sitesi',
    description: 'Geliştirici olarak yeteneklerimi, projelerimi ve deneyimlerimi sergilemek için oluşturduğum kişisel portfolyo web sitesidir. Modern web teknolojileriyle geliştirilmiş, responsive (mobil uyumlu) ve kullanıcı dostu bir tasarıma sahiptir.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'React.js', 'Node.js', 'Express', 'Tailwind CSS'],
    image: '/images/kisisel-portfolyo.png',
    repoUrl: 'https://github.com/aliakpoyraz/kisisel-portfolyo',
    featured: true
  },
  {
    id: 'gemini-api-ornekleri',
    title: 'Gemini API Örnekleri',
    description: 'Bu proje, Ostim Teknik Üniversitesi Ostimtech GDG tarafından düzenlenen HackGDG25 hackathonu öncesinde gerçekleştirilen bir eğitim kapsamında örnek teşkil etmesi amacıyla geliştirilmiştir.',
    technologies: ['HTML5', 'CSS', 'Javascript', 'Bootstrap', 'Node.js', 'Express.js', 'Gemini API'],
    image: '/images/gemini-api-ornekleri.png',
    repoUrl: 'https://github.com/aliakpoyraz/gemini-api-ornekleri',
    featured: true
  },
  {
    id: 'frontend-mentor-projeleri',
    title: 'Frontend Mentor Projeleri',
    description: 'Kendi gelişimimi görmek adına frontendmentor.io da bulunan projeleri kendimce yeniden tasarlıyorum ve sizinle paylaşıyorum.',
    technologies: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    image: '/images/frontend-mentor.png',
    repoUrl: 'https://github.com/aliakpoyraz/frontend-mentor',
    featured: true
  },
  {
    id: 'one-click-block-x',
    title: 'One Click Block X',
    description: 'Tek tuşlamayla birlikte x platformu üzeirnde bulunan kullanıcıları engellemenize olanak sağlayan basit bir javascript chrome eklentisi, chromium tabanlı bütün tarayıcılarda çalışır.',
    technologies: ['Javascript'],
    image: '/images/one-click-block-x.png',
    repoUrl: 'https://github.com/aliakpoyraz/one-click-block-x',
    featured: false
  },
];