// import GetRecs from "../components/GetRecs";
import SearchResults from "../components/SearchResults";
import { useParams } from "react-router-dom";

const Result = () => {
  const { trackid } = useParams();
  console.log({ trackid });
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Back to search
          </a>
        </li>
      </ul>
      <h1>Results</h1>
      <SearchResults trackid={trackid} />
    </div>
  );
};

export default Result;
