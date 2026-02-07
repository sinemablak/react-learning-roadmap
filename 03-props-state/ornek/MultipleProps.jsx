function User({ name, age }) {
  return (
    <div>
      <h3>İsim: {name}</h3>
      <h3>Yaş: {age}</h3>
    </div>
  );
}

function App() {
  return <User name="Sinem" age={27} />;
}

export default App;
