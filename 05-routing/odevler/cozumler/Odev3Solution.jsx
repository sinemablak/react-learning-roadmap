import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")}>
      Giriş Yap
    </button>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
