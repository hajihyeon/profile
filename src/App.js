import './App.css';
// import fetch from "cross-fetch";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";
import MyPost from './my-post';
import staticResponse from './result.json';

async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/Resume-144e51cee8814ba09e6ce84bc04c29a0"
  ).then(res => res.json());

  console.log(data)
  return {
    props: {
      blockMap: data
    }
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: 'white', textAlign: 'left' }}>
          <NotionRenderer blockMap={staticResponse} fullPage={true}  />
          {/* <MyPost></MyPost> */}
        </div>
      </header>
    </div>
  );
}

export default App;
