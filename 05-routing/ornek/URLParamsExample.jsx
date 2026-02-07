import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h2>Ürün ID: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
