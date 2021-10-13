import React from "react";
import "./Card.css";
import cookie from "react-cookies";
function Card(props) {
  const detailHandler = (id) => {
    window.location.href = "/detail";
    cookie.save("id", id);
  };
  return (
    <>
      <div className="continer-Cards">
        {props.filmsList.map((item, indx) => {
          return (
            <>
              <div className="card" key={indx}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                  alt={indx}
                  onClick={() => {
                    detailHandler(item.id);
                  }}
                />
                <p className="rate">{item.vote_average}</p>

                <p className="title">{item.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
