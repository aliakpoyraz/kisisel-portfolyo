import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { Card, CardImage, CardBody, CardFooter } from '../ui/Card';
import { Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, title, description, technologies, image, repoUrl } = project;

  return (
    <Card
      hoverable
      className="h-full flex flex-col bg-white dark:bg-[#161b22] border border-[#30363d] shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#8b949e] dark:hover:border-[#8b949e] transition-all duration-300 hover:-translate-y-1"
    >
      <Link to={`/portfolyo/${id}`}>
        <CardImage
          src={image}
          alt={title}
        />
      </Link>
      <CardBody className="flex-grow">
        <Link to={`/portfolyo/${id}`}>
          <h3 className="text-xl font-bold mb-2 text-black dark:text-[#c9d1d9] hover:text-[#58a6ff] dark:hover:text-[#58a6ff] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-black dark:text-[#8b949e] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.slice(0, 4).map((tech, index) => (
            <Tag
              key={index}
              label={tech}
              variant={
                index % 3 === 0
                  ? 'primary'
                  : index % 3 === 1
                    ? 'secondary'
                    : 'accent'
              }
              size="sm"
            />
          ))}
          {technologies.length > 4 && (
            <Tag
              label={`+${technologies.length - 4}`}
              variant="default"
              size="sm"
            />
          )}
        </div>
      </CardBody>
      <CardFooter className="flex flex-wrap gap-2 justify-center">
        {repoUrl && (
          <Link to={repoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center border-black text-black hover:bg-black hover:text-white dark:border-[#30363d] dark:text-[#c9d1d9] dark:hover:bg-[#1f2428] transition-colors"
            >
              <Github size={16} className="mr-2" />
              GitHub'da İncele
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
