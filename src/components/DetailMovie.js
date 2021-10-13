import axios from "axios";
import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import "./Details.css"
function DetailMovie() {
  const idFilm = cookie.load("id");
  const [data, setData] = useState({});

  async function getFilmById() {
    let url = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=be8039e5a6490d316ea38486d99ac969`;
    const res = await axios.get(url);
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    getFilmById();
  }, []);

  return (
      <>
      <a href="/">Home</a>
    <div className="continer-Details">

      <section className="details">
        <h1>{data.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.id}
        />
        <h2>{data.title}</h2>
        <h3>Release Time :<span>{data.release_date}</span></h3>
        <h3>overview :<span>{data.overview}</span></h3>
        {/* <h3>category :{data.genres.map(item=>`${item.name  }`)}</h3> */}
      </section>
      <section>{/* <Card filmsList={filmsList} /> */}</section>
    </div>
    </>
  );
}

export default DetailMovie;
