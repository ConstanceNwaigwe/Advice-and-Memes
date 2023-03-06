import "./styles.css";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import rickandmortymeme from "./image/rickandmortymeme.png";
import { memeData } from "./data";

function Meme() {
  // state var
  const [num, setNum] = useState(0);
  const [meme, setmeme] = useState(rickandmortymeme);

  // onClick function for new advice button
  const newmemeOnClick = () => {
    console.log("newmemeOnClick has been clicked");
    setNum(Math.floor(Math.random() * memeData.length));
    setmeme(memeData[num].meme);
  };

  // Render
  return (
    <div className="meme_page">
      <div className="meme_page_nav">
        <Link to="/meme">
          <h1>A&amp;M</h1>
        </Link>
        <Link to="/advice">
          <p>Get Advice</p>
        </Link>
      </div>
      <div className="meme_page_container">
        <div className="meme_page_content">
          <div className="meme_page_content_info">
            <h6>Memes to laugh at!</h6>
            <img alt="memeImage" src={meme} />
          </div>
        </div>
        <div className="meme_page_button">
          <button onClick={newmemeOnClick}>New meme</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export { Meme };
