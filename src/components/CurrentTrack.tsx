import auth from "./auth";
import { useState, useEffect } from "react";

interface Props {
  trackid: string | undefined;
}

const CurrentTrack = ({ trackid }: Props) => {
  const [trackInfo, setTrackInfo] = useState<String>();

  useEffect(() => {
    const fetchTrackInfo = async () => {
      const token = await auth();
      const searchParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `https://api.spotify.com/v1/tracks/${trackid}`,
        searchParams
      );
      let result = await response.json();

      // console.log(`trackID: ${trackid}`);

      result = `${result.name} by ${result.artists[0].name}`;
      setTrackInfo(result);
      return result;
    };
    fetchTrackInfo();
  }, [trackid]);
  return (
    <div>
      <h1>{trackInfo}</h1>
    </div>
  );
};

export default CurrentTrack;
