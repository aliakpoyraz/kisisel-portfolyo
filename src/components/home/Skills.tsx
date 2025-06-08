import React from 'react';
import { Code, Layout, Server, Database, Terminal, Settings, Layers, Cpu } from 'lucide-react';

interface Skill {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  {
    title: 'Frontend Geliştirme',
    icon: <Layout className="w-10 h-10 text-[#58a6ff]" />,
    description: 'TailwindCSS, Bootstrap ve React kullanarak hızlı, şık ve mobil uyumlu arayüzler geliştiriyorum.'
  },
  {
    title: 'Backend Geliştirme',
    icon: <Server className="w-10 h-10 text-[#58a6ff]" />,
    description: 'Node.js, Express, Python gibi teknolojileri kullanarak güvenli ve yüksek performanslı backend uygulamaları geliştiriyorum.'
  },
  {
    title: 'Veritabanı Tasarımı',
    icon: <Database className="w-10 h-10 text-[#58a6ff]" />,
    description: 'SQL ve NoSQL çözümlerini kullanarak veritabanı şemalarını tasarlıyorum ve optimize ediyorum.'
  },
  {
    title: 'UI/UX Tasarımı',
    icon: <Layers className="w-10 h-10 text-[#58a6ff]" />,
    description: 'Kullanıcı deneyimini iyileştirmek için kullanıcı arayüzlerini tasarlıyorum.'
  },
  {
    title: 'Performans Optimizasyonu',
    icon: <Cpu className="w-10 h-10 text-[#58a6ff]" />,
    description: 'Uygulamaları hızlı, verimli ve ölçeklenebilir hale getirmek için performansını optimize ediyorum.'
  },
  {
    title: 'SEO',
    icon: <Settings className="w-10 h-10 text-[#58a6ff]" />,
    description: 'SEO stratejileri geliştirerek, arama motorlarında daha yüksek sıralamalar almayı sağlıyorum.'
  },
];

const Skills: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-2">Yeteneklerim</h2>
            <p className="text-slate-600 dark:text-[#8b949e] max-w-2xl mx-auto">
              Öğrenciliğim süresince öğrenmiş olduğum teknolojilerin yanı sıra kendimi geliştirmeye devam ediyorum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#8b949e] dark:hover:border-[#8b949e] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-2">{skill.title}</h3>
                <p className="text-slate-600 dark:text-[#8b949e]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-[#30363d]"></div>
    </>
  );
};

export default Skills;