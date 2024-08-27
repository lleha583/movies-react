import { useState, Suspense, lazy, useEffect, useDeferredValue } from "react";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import "./movies.css";

const Catalog = lazy(() => {
  return import("../../components/Catalog/Catalog");
});

export default function Movies() {

  const [filter, setFilter] = useState<boolean>(false)



  return (
    <section className="section">
      <div className="filter">
        <button onClick={(() => {setFilter(!filter)})} className="filter_btn">filter</button>
        {
          (filter  && <Filter />)
        }
      </div>
      <div id="film_scroll" className="films">
        <Suspense fallback={<Loading />}>
          <Catalog />
        </Suspense>
      </div>
    </section>
  );
}
