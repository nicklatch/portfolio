import { Routes, Route, useMatch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div id='main__div' className='min-w-full min-h-screen mx-auto px-5'>
      <div className='2xl:max-w-fit mx-auto'>
        <div className='flex flex-col min-h-screen max-w-screen p-2 justify-start items-stretch sm:items-stretch'>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
