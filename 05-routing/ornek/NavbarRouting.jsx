import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Ana Sayfa</h2>;
}

function Contact() {
  return <h2>İletişim</h2>;
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Ana Sayfa</Link> |{" "}
      <Link to="/contact">İletişim</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
