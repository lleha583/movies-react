import { useState } from "react";
import "./filter.css";
import { useDispatch } from "react-redux";
import { getSearch } from "../../store/linkSlice";

export default function Filter(props: any) {
  const dispatch = useDispatch();

  const [year, setYear] = useState<string>("");
  const [search, setSearch] = useState<string>("avengers");
  const [type, setType] = useState<string>("movie");

  const typeName = (event: any) => {
    setType(event.target.value);
  };

  const getMovies = () => {
    const options = {
      year: year,
      search: search,
      type: type,
    };
    dispatch(getSearch(options));
  };

  return (
    <>
      <div className="filter">
        <div className="filter__inner">
          <div className="type">
            <h2>type</h2>
            <p>
              <label>
                <input
                  type="radio"
                  onClick={(event) => {
                    typeName(event);
                  }}
                  value="movie"
                  name="type"
                  defaultChecked={true}
                />
                movie
              </label>
              <label>
                <input
                  type="radio"
                  onClick={(event) => {
                    typeName(event);
                  }}
                  value="series"
                  name="type"
                />
                series
              </label>
            </p>
          </div>
          <div>
            <h2>Search</h2>
            <input
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              value={search}
              type="text"
              placeholder="search"
            />
          </div>
          <div>
            <h2>year</h2>
            <input
              onChange={(event) => {
                setYear(event.target.value);
              }}
              value={year}
              type="number"
              placeholder="year"
            />
          </div>
          <div className="search_movie">
            <button onClick={getMovies}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
