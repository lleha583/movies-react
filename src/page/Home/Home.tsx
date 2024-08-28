import LineFilm from "../../components/LineFilm/LineFilm";
import './home.css';
import bg from '../../assets/background/home_bg.png'
import Recomend from "../../components/Recomend/Recomend";

export default function Home() {

  return (
    <>
      <div className="bg">
        <div>
          <h1 className="logo_start">BEST</h1>
          <h1 className="logo_end">Movies</h1>
          <h1 className="logo_start"> for you</h1>
        </div>
        <img src={bg} alt="" />
      </div>
      <section className="line_film">
      <LineFilm type={"movie"} search={"iron-man"} link={'/movies'} />
      </section>
      <section>
        <Recomend />
      </section>
      <section className="line_film">
      <LineFilm type={"series"} search={"spider-man"} link={'/movies'}  />
      </section>
    </>
  );
}
