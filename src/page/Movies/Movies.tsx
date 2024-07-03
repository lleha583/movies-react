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

  const [page, setPage] = useState(1);
  const [films, setFilms] = useState<any>([]);
  const [url, setUrl] = useState(`${urlSetting.url}&type=${urlSetting.type}&s=${urlSetting.search}&page=${urlSetting.page}&y=${urlSetting.year}`);


  useEffect(() => {
    fetch(url, {method: "GET",})
      .then((response) => response.json())
      .then((value) => {setFilms([...films, ...value.Search]);
        console.log(value)
});
  }, [url]);

  return (
    <section className="section">
      <div className="filter">
        <Filter setUrl={setUrl} urlSetting={urlSetting} />
      </div>

      <Suspense fallback={<h1>Load</h1>}>
        <Catalog films={films} urlSetting={urlSetting} setUrl={setUrl} setUrlSetting={setUrlSetting} />
      </Suspense>
      <div className="pages">
          {
            
          }
      </div>

    </section>
  );
}
