const Footer = () => {
  return (
    <footer className='flex justify-center mt-auto'>
      <p className='text-sm bg-gradient-to-l from-indigo-500 via-fuchsia-500 to-rose-500 text-transparent dark:bg-gradient-to-l dark:from-gray-800 dark:via-gray-600 dark:to-gray-400 bg-clip-text sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4'>
        <strong>
          © 2023 Nick Latcham —{' '}
          <a href='https://github.com/nicklatch'>Github</a>
        </strong>
      </p>
    </footer>
  );
};
export default Footer;
