import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // can use for numbers, strings and arrays but cannot use for booleans and objects
  const link = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
