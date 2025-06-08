import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  
  // Extract all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = selectedTechnology
    ? projects.filter(project => project.technologies.includes(selectedTechnology))
    : projects;
  
  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-4">Portfolyo</h1>
            <p className="text-slate-600 dark:text-[#8b949e] max-w-2xl mx-auto">
              Geliştirdiğim projeler ve kullandığım teknolojiler
            </p>
          </div>

          {/* Technology Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setSelectedTechnology(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTechnology === null
                  ? 'bg-[#238636] text-white'
                  : 'bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#c9d1d9] hover:bg-slate-200 dark:hover:bg-[#30363d]'
              }`}
            >
              Tümü
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTechnology === tech
                    ? 'bg-[#238636] text-white'
                    : 'bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#c9d1d9] hover:bg-slate-200 dark:hover:bg-[#30363d]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;