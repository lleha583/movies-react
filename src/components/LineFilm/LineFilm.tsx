import { useState, useEffect } from "react";
import "./lineFilm.css";
import { Link } from "react-router-dom";

export default function LineFilm(props: any) {
  const [arr, setArr] = useState<any>([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=ee37e9cf&type=${props.type}&s=${props.search}&page=1`, {
        method: "GET",
      })
      .then((response) => response.json())
      .then((value) => {
        setArr([...value.Search]);
      });
  }, []);

  return (
    <div className="block">
      <div className="set_films">
        <h1>{props.category}</h1>
        <Link to={props.link} className="link">
          view all &rarr;
        </Link>
      </div>
      <div className="list">
        {arr.map((item: any) => {
          return (
            <Link to={"/movies/" + item.imdbID} key={item.id}>
              <div className="film_block">
                <img src={item.Poster} alt="" />
                <div className="film_name">
                  <p>{item.Title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
