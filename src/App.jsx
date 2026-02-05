import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/layout/Footer";
import Blog from "./components/pages/Blog";
import SinglePostPage from "./components/pages/SinglePostPage"; 
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow bg-[#0a0a0a] pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<SinglePostPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;