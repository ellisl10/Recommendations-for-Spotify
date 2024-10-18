import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  document.title = "Recommendations for Spotify";

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/result/:trackid" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
