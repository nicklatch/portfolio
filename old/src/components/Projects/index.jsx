import ProjectCard from './ProjectCard';
import { projects } from './projectsObj';

const Projects = () => {
  return (
    <div className='projects__container'>
      <h1 className='page__heading'>Projects</h1>
      <section className='projects__container-section'>
        <h2>Front End Mentor</h2>
        {projects.map((project) => (
          <ProjectCard key={project.repo} {...project} />
        ))}
      </section>
      <p>
        I've always got my hands into something, see more of what im working on
        over at my <a href='https://github.com/nicklatch'>GitHub</a>
      </p>
    </div>
  );
};

export default Projects;
