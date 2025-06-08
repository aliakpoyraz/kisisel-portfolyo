import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import { ArrowLeft, Github } from 'lucide-react';
import { Project } from '../types';
import Footer from '../components/layout/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return (
      <>
        <Container>
          <div className="text-center py-20 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-[#c9d1d9]">Proje bulunamadı</h1>
            <Link to="/portfolyo" className="text-[#58a6ff] hover:text-[#79c0ff] mt-4 inline-block">
              Portfolyoya dön
            </Link>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <div className="container mx-auto px-4 md:px-6 min-h-screen pb-12">
          <Link
            to="/portfolyo"
            className="inline-flex items-center text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#c9d1d9] mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Portfolyoya Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-contain rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-[#8b949e] mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <Tag key={index} label={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="flex items-center bg-[#161b22] text-[#c9d1d9] hover:bg-[#21262d] border-[#30363d]"
                    >
                      <Github size={18} className="mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProjectDetail;
