import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey = "240320fbbabaa4e9d5093b26047ebbf1";
const imgUrl = "https://image.tmdb.org/t/p/original";
// TV Popular
const getTvPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
// TV Top Rated
const getTvTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;
// Movies Popular
const getMoviesPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
// Movies Top Rated
const getMoviesTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
// Now Playing
const getNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

const v = Math.floor(Math.random() * 19);
// const v = 11;
console.log(v);

const wordLimit = (string) => {
  return string.substr(0, 150) + "...";
};

// Home Page Display Movie/Shows
const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [{}] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  // useState Hook Declaration
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  useEffect(() => {
    // D A T A    F E T C H I N G   &   D I P L A Y

    // N O W    P L A Y I N G
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(getNowPlaying);
      setNowPlaying(results);
    };

    // P O P U L A R    T V   S H O W S
    const fetchPopularTvShow = async () => {
      const {
        data: { results },
      } = await axios.get(getTvPopular);
      setPopularTvShows(results);
    };

    // T O P    R A T E D   T V   S H O W S
    const fetchTopRatedTvShows = async () => {
      const {
        data: { results },
      } = await axios.get(getTvTopRated);
      setTopRatedTvShows(results);
    };

    // P O P U L A R
    const fetchMoviesPopular = async () => {
      const {
        data: { results },
      } = await axios.get(getMoviesPopular);
      setPopularMovies(results);
    };

    // T O P    R A T E D   M O V I E S
    const fetchMoviesTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(getMoviesTopRated);
      setTopRatedMovies(results);
    };

    fetchNowPlaying();
    fetchPopularTvShow();
    fetchTopRatedTvShows();
    fetchMoviesPopular();
    fetchMoviesTopRated();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: topRatedTvShows[v]
            ? `url(${`${imgUrl}/${topRatedTvShows[v].backdrop_path}`})`
            : "none",
        }}
      >
        {topRatedTvShows[v] && <h1>{topRatedTvShows[v]?.name}</h1>}
        {topRatedTvShows[v] && <p>{wordLimit(topRatedTvShows[v].overview)}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>

      <Row title={"Continue Watching"} arr={nowPlaying} />
      <Row title={"Top Rated TV SHows"} arr={topRatedTvShows} />
      <Row title={"Popular Tv Shows"} arr={popularTvShows} />
      <Row title={"Top Rated Movies"} arr={topRatedMovies} />
      <Row title={"Popular Movies"} arr={popularMovies} />
    </section>
  );
};

export default Home;
