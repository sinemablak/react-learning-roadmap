import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ana Sayfa</h2>

      <button onClick={() => navigate("/profile")}>
        Profile Git
      </button>
    </div>
  );
}

function Profile() {
  return <h2>Profil Sayfası</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
