import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from 'react';

function MyPost(){
    const [response, setResponse] = useState({});

    useEffect(() => {
        console.log('use effect 실행');
        const NOTION_PAGE_ID = 'Resume_KOR-144e51cee8814ba09e6ce84bc04c29a0';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
          .then(res => res.json())
          .then((resJson) => {
            setResponse(resJson);
          });
      }, [])

      return(
        <div style={{ backgroundColor: 'white', textAlign: 'left' }}>
            <NotionRenderer blockMap={response}  fullPage={true}  />
        </div>
      )
}

export default MyPost;