import CurrentTrack from "../components/CurrentTrack";
import SearchResults from "../components/SearchResults";
import { useParams } from "react-router-dom";

const Result = () => {
  const { trackid } = useParams();

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Back to search
          </a>
        </li>
      </ul>
      <h1>Showing results for</h1>
      <CurrentTrack trackid={trackid} />
      <SearchResults trackid={trackid} />
    </div>
  );
};

export default Result;
