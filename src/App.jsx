import CommingSoon from './components/CommingSoon';
import TechStack from './components/TechStack';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-w-full min-h-screen mx-auto px-5 bg-gradient-to-t from-gray-100 via-gray-300 to-gray-800 dark:bg-gradient-to-b dark:from-black dark:via-dark_blue/50 dark:to-purple bg-cover'>
      <div className='2xl:max-w-fit mx-auto'>
        <div className='flex flex-col min-h-screen max-w-screen p-2 justify-between items-center sm:items-stretch'>
          <Header />
          <div className='flex flex-col justify-around items-center gap-20'>
            <CommingSoon />
            <TechStack />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
