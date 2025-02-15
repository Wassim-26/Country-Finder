import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navebar/Navbar";
import SearchSection from "./components/SearchSection/Search";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      <Hero />
    </div>
  );
}

export default App;
