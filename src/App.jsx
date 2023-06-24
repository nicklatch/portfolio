import { Routes, Route, useMatch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  return (
    <div className="min-w-full min-h-screen mx-auto px-5 bg-gradient-to-t from-gray-100 via-gray-300 to-gray-800 dark:bg-gradient-to-b dark:from-black dark:via-dark_blue/50 dark:to-purple bg-cover">
      <div className="2xl:max-w-fit mx-auto">
        <div className="flex flex-col min-h-screen max-w-screen p-2 justify-between items-center sm:items-stretch">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<div>about</div>} />
            <Route path="/projects" element={<div>projects</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
