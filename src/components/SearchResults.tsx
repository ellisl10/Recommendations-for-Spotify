import GetRecs from "./GetRecs";
import { useEffect, useState } from "react";

interface Props {
  trackid: string | undefined;
}

interface Item {
  name: string;
  artists: Array<Item>;
  album: Item;
  images: Array<Item>;
  url: string;
}

const SearchResults = ({ trackid }: Props) => {
  const [recommendations, setRecommendations] = useState<Item[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      console.log("fetching...");
      const recs: Array<any> = await GetRecs(trackid); // returns 20 recommendations, each of which are objects
      setRecommendations(recs);
    };
    fetchRecommendations();
  }, [trackid]);

  return (
    <ul className="list-group">
      {recommendations.map((item, index) => (
        <li key={index} className="list-group-item">
          <img
            src={`${item.album.images[0].url}`}
            alt="Album image"
            width="50px"
          />
          {/*`${item.album.images.url}`*/}
          {` ${item.name} by ${item.artists[0].name}`}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
