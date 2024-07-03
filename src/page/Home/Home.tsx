import LineFilm from "../../components/LineFilm/LineFilm";
import './home.css';
import bg from '../../assets/icons/home_bg.png'

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
      <LineFilm category={"Top films"} type={"movie"} search={"iron-man"} link={'/movies'} />
      <LineFilm category={"Series"} type={"series"} search={"spider-man"} link={'/movies'}  />
    </>
  );
}
