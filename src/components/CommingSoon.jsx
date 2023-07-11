const ComingSoon = () => {
  return (
    <div className='mockup-window ring-4 ring-indigo-500 shadow-lg shadow-indigo-500/50 p-8 sm:max-w-2xl sm:max-h-3xl mx-auto'>
      <h1 className='text-4xl text-center mb-4 sm:text-6xl bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-400 dark:to-indigo-500 text-transparent bg-clip-text pb-2'>
        Welcome! I'm Nick
        <br />
      </h1>
      <p className='text-md text-black dark:text-slate-400 sm:text-lg text-center'>
        A freelance fullstack developer who works techincal product support by
        day, and builds web things by night. Building performant, accessible,
        and enjoyable-to-use websites has become a passion of mine. Think I'd be
        a good fit for your team?{' '}
        <a
          href='mailto:nick@nicklatcham.dev'
          className='text-indigo-500 underline decoration-4'
        >
          Let's talk!
        </a>
      </p>
    </div>
  );
};

export default ComingSoon;
