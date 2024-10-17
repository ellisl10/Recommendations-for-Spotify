import SearchTrack from "./SearchTrack";
import { useNavigate } from "react-router-dom";

interface Props {
  trackName: string;
}

const SearchButton = ({ trackName }: Props) => {
  let disabled = false;
  if (trackName === "") {
    disabled = true;
  }
  const navigate = useNavigate();

  const handleClick = async () => {
    const trackinfo = await SearchTrack(trackName);
    const trackid = trackinfo.tracks.items[0].id;
    navigate(`/result/${trackid}`);
    return trackinfo;
  };

  return (
    <button
      type="button"
      className="btn"
      disabled={disabled}
      id="submit"
      onClick={() => handleClick()}
    >
      Search
    </button>
  );
};

export default SearchButton;
