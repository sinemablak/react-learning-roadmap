import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return <h2>Seçilen Ürün ID: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
