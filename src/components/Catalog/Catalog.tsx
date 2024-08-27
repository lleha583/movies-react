import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./catalog.css";
import noImage from "../../assets/icons/no-image.svg";
import { fetchData, page } from "../../store/linkSlice";
import Loading from "../Loading/Loading";
import store from "../../store";
import { IState } from "../../store/linkSlice";

export default function Catalog() {
  
  const link = useSelector((state: {link: IState}) => {return state.link});
  const dispatch = useDispatch();

  const [films, setFilms] = useState<string[]>([]);
  const [loadData, setLoadData] = useState<boolean>(false)

  useEffect(()=> {

    store.dispatch(fetchData(link))
      .then(response => {return response.payload})
      .then(value=> {

        setLoadData(false)
        if(value.Response == "False") return document.removeEventListener("scroll", scrollHandler) ;
        
        setFilms([...films, ...value.Search])
      })
  }, [link])

  useEffect(() => {

    document.addEventListener("scroll", scrollHandler)

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);


  const scrollHandler = useCallback(()=> {
    
    let maxHeight = document.body.scrollHeight;
    let windowHeight = document.documentElement.clientHeight;
    let scroll = window.scrollY;

    if (windowHeight + scroll === maxHeight) {
      console.log('fecrferf')
      setLoadData(true)
      dispatch(page());
    }
  }, [])


  return (
    <>
    <div className="catalog">
      {films.map((movie: any) => {
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
    {loadData && <Loading />}
    </>
  );
}
