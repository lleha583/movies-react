import { useState, useEffect, Suspense } from "react";
import Filter from "../../components/Filter/Filter";
import Catalog from "../../components/Catalog/Catalog";
import './movies.css'

export default function Movies() {


  const [urlSetting, setUrlSetting] = useState({
    year: '',
    search: 'avengers',
    type: 'movie',
    page: 1,
    url: 'https://www.omdbapi.com/?apikey=ee37e9cf',
  })

  const [films, setFilms] = useState<any>([]);


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

      <Suspense fallback={<h1>Load</h1>}>
        <Catalog films={films} urlSetting={urlSetting} setUrlSetting={setUrlSetting} />
      </Suspense>

    </section>
  );
}
