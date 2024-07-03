import { useState } from "react";
import "./filter.css";

export default function Filter(props: any) {



  const [year, setYear] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("movies");

  const getMovies = () => {
    props.setUrl(`https://www.omdbapi.com/?apikey=ee37e9cf&type=${type}&s=${search}&page=1y=${year}`)


  }

  return (
    <>
      <div className="filter">
        <div className="filter__inner">
          <div>
            <button>movies</button>
            <button>series</button>
          </div>
          <div>
            <h2>Search</h2>
            <input onChange={(event) => {setSearch(event.target.value);}} value={search} type="text" placeholder="search" />
          </div>
          <div>
            <h2>year</h2>
            <input onChange={(event) => {setYear(event.target.value);}} value={year} type="number" placeholder="year" />
          </div>
          <div className="search_movie">
            <button onClick={getMovies}>search</button>
          </div>
        </div>
      </div>
    </>
  );
}
