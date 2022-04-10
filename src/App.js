import './App.css';
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import MyPost from './my-post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: 'white', textAlign: 'left' }}>
          <MyPost></MyPost>
        </div>
      </header>
    </div>
  );
}

export default App;
