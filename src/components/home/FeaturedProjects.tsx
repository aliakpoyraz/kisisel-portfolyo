import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../portfolio/ProjectCard';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-[#c9d1d9] mb-2">Öne Çıkan Projeler</h2>
              <p className="text-black dark:text-[#8b949e] max-w-2xl">
                Son zamanlarda geliştirdiğim ve hala geliştirme sürecinde olan projeler
              </p>
            </div>
            <Link
              to="/portfolyo"
              className="mt-4 md:mt-0 flex items-center text-[#58a6ff] dark:text-[#58a6ff] font-medium hover:text-[#79c0ff] dark:hover:text-[#79c0ff] transition-colors"
            >
              Tüm Projeler
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-[#30363d]"></div>
    </>
  );
};

export default FeaturedProjects;