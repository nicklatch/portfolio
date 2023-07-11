import ProjectCard from './ProjectCard';
import { projects } from './projectsObj';

const Projects = () => {
  return (
    <div className='projects__container slide_in'>
      <h1 className='page__heading'>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.repo} {...project} />
      ))}
    </div>
  );
};

export default Projects;
