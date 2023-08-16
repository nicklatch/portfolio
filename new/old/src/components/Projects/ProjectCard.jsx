const ProjectCard = ({ title, screenshot, desc, live, repo }) => {
  return (
    <article className='project__card'>
      <h2 className='project__card-title'>{title}</h2>
      <img src={screenshot} className='project__card-screenshot' />
      <p className='project__card-description'>{desc}</p>
      <a className='project__card-link' href={live}>
        Live View
      </a>
      {'   |   '}
      <a className='project__card-link' href={repo}>
        Source
      </a>
    </article>
  );
};

export default ProjectCard;
