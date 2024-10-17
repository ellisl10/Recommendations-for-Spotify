// import GetRecs from "./GetRecs";
import SearchTrack from "./SearchTrack";
import { useNavigate } from "react-router-dom";

interface Props {
  trackName: string;
}

const SearchButton = ({ trackName }: Props) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const trackid = await SearchTrack(trackName);
    navigate(`/result/${trackid}`);
    return trackid;
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      id="submit"
      onClick={() => handleClick()}
    >
      Search
    </button>
  );
};

export default SearchButton;
