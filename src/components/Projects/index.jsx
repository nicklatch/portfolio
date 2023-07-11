import ProjectCard from './ProjectCard';
import { projects } from './projectsObj';

const Projects = () => {
  return (
    <>
      <h1 className='page__heading'>Projects</h1>
      <main className='flex flex-col justify-center items-center text-center'>
        {projects.map((project) => (
          <ProjectCard key={project.repo} {...project} />
        ))}
      </main>
    </>
  );
};

export default Projects;
