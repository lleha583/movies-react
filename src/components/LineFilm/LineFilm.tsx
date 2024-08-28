import { useState, useEffect } from "react";
import "./lineFilm.css";
import { Link } from "react-router-dom";
import { IListFilm } from "../../interface/interface";

interface IProps {
  type: string,
  search: string,
  link: string
}

export default function LineFilm({ type, search, link }: IProps) {
  const [arr, setArr] = useState<IListFilm[]>([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=ee37e9cf&type=${type}&s=${search}&page=1`, {
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
        <h1>{type}</h1>
        <Link to={link} className="link">
          view all &rarr;
        </Link>
      </div>
      <div className="list">
        {arr.map((item: IListFilm, index) => {
          return (
            <Link to={"/movies/" + item.imdbID} key={index}>
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
