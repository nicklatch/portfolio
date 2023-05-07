import CommingSoon from './components/CommingSoon';
import TechStack from './components/TechStack';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen max-w-screen p-2 justify-center items-center'>
      <Header />
      <div className='flex flex-col flex-grow-2 items-center gap-20'>
        <CommingSoon />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
}

export default App;
