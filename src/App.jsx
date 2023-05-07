import CommingSoon from "./components/CommingSoon";
import TechStack from "./components/TechStack";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen p-2 justify-between items-center sm:items-stretch">
      <Header />
      <div className="flex flex-col justify-around items-center gap-20">
        <CommingSoon />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
}

export default App;
