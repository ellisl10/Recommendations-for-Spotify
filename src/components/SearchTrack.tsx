import auth from "./auth.tsx";

const SearchTrack = async (trackName: string) => {
  const token = await auth();
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=1`,
    searchParams
  );
  let trackinfo = await response.json();

  // console.log(`trackID: ${trackid}`);
  return trackinfo;
};

export default SearchTrack;
