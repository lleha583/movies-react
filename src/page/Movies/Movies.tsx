import { useState, Suspense, lazy, useEffect, useDeferredValue } from "react";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import { fetchData } from "../../store/linkSlice";
import store from "../../store";
import "./movies.css";
import { result } from "../../store/linkSlice";
import { IState } from "../../store/linkSlice";

const Catalog = lazy(() => {
  return import("../../components/Catalog/Catalog");
});

export default function Movies() {
  const link = useSelector((state: {link: IState}) => {return state.link});

  const [filter, setFilter] = useState<boolean>(false)
  const [films, setFilms] = useState<string[]>([...result]);
  const value = useDeferredValue(films)


  useEffect(() => {

  store.dispatch(fetchData(link));
    
  setTimeout(() => {
    return setFilms([...result]);
  }, 1000)

  }, [link]);

  return (
    <section className="section">
      <div className="filter">
        <button onClick={(() => {setFilter(!filter)})} className="filter_btn">filter</button>
        {
          (filter === true) ? (<Filter />) : ''
        }
      </div>
      <div id="film_scroll" className="films">
        <Suspense fallback={<Loading />}>
          <Catalog films={value} />
        </Suspense>
      </div>
    </section>
  );
}
