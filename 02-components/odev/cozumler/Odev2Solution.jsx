function Header() {
  return <h1>Blog Sitesi</h1>;
}

function BlogPost() {
  return <p>React component yapısı çok güçlüdür.</p>;
}

function Footer() {
  return <h4>Telif Hakkı 2026</h4>;
}

function App() {
  return (
    <div>
      <Header />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
