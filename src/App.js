import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Movies from "./components/Navbar/Movies/Movies";
import TvShows from "./components/Navbar/TvShows/TvShows";
import NewPopular from "./components/Navbar/NewPopular/NewPopular";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/TvShows" element={<TvShows />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/NewPopular" element={<NewPopular />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
