const About = () => {
  return (
    <>
      <h1 className='page__heading'>About</h1>
      <div className='mockup-window ring-4 ring-indigo-500 shadow-lg shadow-indigo-500/50 p-8 sm:max-w-2xl my-auto mx-auto'>
        <h2 className='text-4xl text-center mb-4 sm:text-5xl bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-400 dark:to-indigo-500 text-transparent bg-clip-text pb-2'>
          So...who is this Nick guy anyway?
        </h2>
        <p className='text-md text-white dark:text-slate-400 sm:text-lg text-center'>
          Coming soon!{' '}
          <a
            href='mailto:nick@nicklatcham.dev'
            className='text-indigo-500 underline decoration-4'
          >
            Let's talk!
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
