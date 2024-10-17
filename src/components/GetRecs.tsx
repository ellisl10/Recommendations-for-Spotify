import auth from "./auth";

const GetRecs = async (seed_tracks: string | undefined) => {
  const token = await auth();
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}`,
    searchParams
  );
  console.log("searched");
  let recommendations = await response.json();
  console.log(
    // `recommendations: ${recommendations.name} by ${recommendations.artists[0].name}`
    `recommendations: ${recommendations.tracks.name}`
  );
  return recommendations.tracks;
};

export default GetRecs;
