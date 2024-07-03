import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
import noImage from "../../assets/icons/no-image.svg";

export default function Catalog(props: any) {

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [props.urlSetting.page]);

  const scrollHandler = () => {
    let maxHeight = document.body.scrollHeight;
    let windowHeight = document.documentElement.clientHeight;
    let scroll = window.scrollY;

    if (windowHeight + scroll === maxHeight) {
      props.setUrlSetting({
        year: '',
        search: 'avengers',
        type: 'movie',
        page: props.urlSetting.page + 1,
        url: 'https://www.omdbapi.com/?apikey=ee37e9cf',
      })
    }
  };

  return (
    <div id="film_scroll" className="films">
      {props.films.map((movie: any) => {
        return (
          <Link to={movie.imdbID}>
            <div className="film_block" key={movie.imdbID}>
              {
                movie.Poster !== "N/A" ? (<img src={movie.Poster} alt="" />) : (<img src={noImage} />)
              }
              <div className="film_name">
                <p>{movie.Title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
