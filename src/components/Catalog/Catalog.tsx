import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./catalog.css";
import noImage from "../../assets/icons/no-image.svg";
import { page } from "../../store/linkSlice";

interface IProps {
  films: string[]
}

export default function Catalog(props: IProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    let maxHeight = document.body.scrollHeight;
    let windowHeight = document.documentElement.clientHeight;
    let scroll = window.scrollY;

    if (windowHeight + scroll - 50 === maxHeight) {
      dispatch(page());
    }
  };

  return (
    <div className="catalog">
      {props.films.map((movie: any) => {
        return (
          <Link to={movie.imdbID}>
            <div className="film_block" key={movie.imdbID}>
              {movie.Poster !== "N/A" ? (<img src={movie.Poster} alt="" />) : (<img src={noImage} />)}
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
