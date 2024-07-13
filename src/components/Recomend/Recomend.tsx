import { useEffect, useState } from "react";
import "./recomend.css";
import { Link } from "react-router-dom";
import noImage from "../../assets/icons/no-image.svg";  

export default function Recomend() {
  const [type, setType] = useState("movie");
  const [film, setFilm] = useState<any>([]);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=ee37e9cf&type=${type}&s=sniper&page=1`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setFilm([...value.Search]);
      });
  }, [type]);

  const getType = (type: string) => {
    if (type === "movie") {
        setType('movie')
        document.getElementById('series')!.className = "nav_btn"
        document.getElementById('movie')!.className = "nav_btn open"
    }
    if (type === "series") {
        setType('series')
        document.getElementById('series')!.className = "nav_btn open"
        document.getElementById('movie')!.className = "nav_btn"

    }
  }

  return (
    <>
      <div className="navigate">
        <h1>Recomend</h1>
        <div>
          <button onClick={() => {getType('movie')}} id="movie" className="nav_btn open">movies</button>
          <button onClick={() => {getType('series')}} id="series" className="nav_btn">series</button>
        </div>
      </div>
      <div className="recomend__inner">
        <div className="recomend_block">
          {film.map((item: any) => {
            return (
              <>
                <div className="recomend_film">
                {item.Poster !== "N/A" ? (<img src={item.Poster} alt="" />) : (<img src={noImage} />)}
                  <div className="recomend_info">
                    <p className="recomend_info_name">{item.Title}</p>
                    <p className="recomend_info_year">{item.Year}</p>
                    <p className="recomend_info_type">{item.Type}</p>
                    <Link  to={"/movies/" + item.imdbID}>
                        <button className="recomend_button">watch</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
