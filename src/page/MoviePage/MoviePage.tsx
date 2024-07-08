import { Suspense, useDeferredValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviePage.css";
import noImage from "../../assets/icons/no-image.svg";
import Loading from "../../components/Loading/Loading";

export default function MoviePage() {
  let imdbID = useParams();

  const [info, setInfo] = useState<any>({});
  const infoDebug = useDeferredValue(info);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=ee37e9cf&i=${imdbID.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((value) => setInfo({ ...value }));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <section>
        <div className="info">
          <div className="info_poster">
            {infoDebug.Poster !== "N/A" ? (
              <img src={infoDebug.Poster} alt="" />
            ) : (
              <img src={noImage} />
            )}
          </div>
          <div>
            <div className="info_name">
              <h2>{infoDebug.Title}</h2>
              <p>{infoDebug.Year}</p>
            </div>
            <div className="info_full">
              <div>
                <p className="info_tag">Actors: </p>
                <p className="info_content">{infoDebug.Actors}</p>
              </div>
              <div>
                <p className="info_tag">Awards: </p>
                <p className="info_content">{infoDebug.Awards}</p>
              </div>
              <div>
                <p className="info_tag">Country: </p>
                <p className="info_content">{infoDebug.Country}</p>
              </div>
              <div>
                <p className="info_tag">Genre: </p>
                <p className="info_content">{infoDebug.Genre}</p>
              </div>
              <div>
                <p className="info_tag">Released: </p>
                <p className="info_content">{infoDebug.Released}</p>
              </div>
              <div>
                <p className="info_tag">Writer: </p>
                <p className="info_content">{infoDebug.Writer}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h1>Plot</h1>
          <p>{infoDebug.Plot}</p>
        </div>
        <div className="box">
          <h1>ratings</h1>
          <p>
            <strong>imdbRating:</strong> {infoDebug.imdbRating}
          </p>
        </div>
      </section>
    </Suspense>
  );
}
