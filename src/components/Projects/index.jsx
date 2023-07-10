import ProjectCard from './ProjectCard';
import { projects } from './projectsObj';

const Projects = () => {
  return (
    <>
      <h1 className='page__heading'>Projects</h1>
      <main className='flex flex-col justify-center items-center text-center'>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </main>
    </>
  );
};

export default Projects;
