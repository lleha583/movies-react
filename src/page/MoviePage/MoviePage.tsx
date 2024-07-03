import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviePage.css";
import noImage from "../../assets/icons/no-image.svg";

export default function MoviePage(props: any) {
  let imdbID = useParams();

  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=ee37e9cf&i=${imdbID.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((value) => { console.log(value); setInfo({ ...value } );});
  }, []);
  console.log(info);

  return (
    <section>
      <div className="info">
        <div className="info_poster">
          {info.Poster !== "N/A" ? (
            <img src={info.Poster} alt="" />
          ) : (
            <img src={noImage} />
          )}
        </div>
        <div>
          <div className="info_name">
            <h2>{info.Title}</h2>
            <p>{info.Year}</p>
          </div>
          <div className="info_full">
            <div>
              <p className="info_tag">Actors: </p>
              <p className="info_content">{info.Actors}</p>
            </div>
            <div>
              <p className="info_tag">Awards: </p>
              <p className="info_content">{info.Awards}</p>
            </div>
            <div>
              <p className="info_tag">Country: </p>
              <p className="info_content">{info.Country}</p>
            </div>
            <div>
              <p className="info_tag">Genre: </p>
              <p className="info_content">{info.Genre}</p>
            </div>
            <div>
              <p className="info_tag">Released: </p>
              <p className="info_content">{info.Released}</p>
            </div>
            <div>
              <p className="info_tag">Writer: </p>
              <p className="info_content">{info.Writer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <h1>Plot</h1>
        <p>{info.Plot}</p>
      </div>
      <div className="box">
        <h1>ratings</h1>
          <p><strong>imdbRating:</strong> {info.imdbRating}</p>
      </div>
    </section>
  );
}
