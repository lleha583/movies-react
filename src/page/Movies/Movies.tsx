import { useState, useEffect, Suspense, useDeferredValue, lazy } from "react";
import Filter from "../../components/Filter/Filter";

import Loading from "../../components/Loading/Loading";
import './movies.css'

const Catalog = lazy(() => {
  return import('../../components/Catalog/Catalog');
})

export default function Movies() {


  const [urlSetting, setUrlSetting] = useState({
    year: '',
    search: 'avengers',
    type: 'movie',
    page: 1,
    url: 'https://www.omdbapi.com/?apikey=ee37e9cf',
  })

  const [films, setFilms] = useState<any>([]);
  const defferedFilms = useDeferredValue(films)


  useEffect(() => {
    fetch(`${urlSetting.url}&type=${urlSetting.type}&s=${urlSetting.search}&page=${urlSetting.page}&y=${urlSetting.year}`, {method: "GET",})
      .then((response) => response.json())
      .then((value) => {
        if(urlSetting.page === 1) {
          setFilms([...value.Search]);
        }else {
          setFilms([...films, ...value.Search]);
        }
        console.log(value)
});
  }, [urlSetting]);

  return (
    <section className="section">
      
      <div className="filter">
        <Filter setUrlSetting={setUrlSetting} urlSetting={urlSetting} />
      </div>
      <div id="film_scroll" className="films">
      <Suspense fallback={<Loading />}>
        <Catalog films={defferedFilms} urlSetting={urlSetting} setUrlSetting={setUrlSetting} />
      </Suspense>
      </div>
    </section>
  );
}
