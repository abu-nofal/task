import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Main.css";
function Main() {
  const [filmsList, setFilmsData] = useState([]);

  async function featchDataGross() {
    let url =
      "https://api.themoviedb.org/3/list/10?api_key=be8039e5a6490d316ea38486d99ac969";
    let res = await axios.get(url);
    console.log("grossingFilms", res.data.items);
    setFilmsData(res.data.items);
    
  }
  async function featchDataOscars() {
    let url =
      "https://api.themoviedb.org/3/list/28?api_key=be8039e5a6490d316ea38486d99ac969";
    let res = await axios.get(url);
    // console.log("OscarsFilms ", res.data.items);
    setFilmsData(res.data.items);
  }

  useEffect(() => {
    featchDataGross();
    featchDataOscars();
  }, []);
  return (
    <>
      <div className="continer-Main">
        <div>
          <h1>Movies</h1>
        </div>
        <div className="continer-buttons-category">
            <section className="buttons-category">
           
                <a href  onClick={featchDataGross}>grossingFilms</a>
                <a href onClick={featchDataOscars}>OscarsFilms</a>
       
            </section>
         
          <input type="text" placeholder="serach..."/> 
        </div>

        <Card filmsList={filmsList} />
      </div>
    </>
  );
}

export default Main;
