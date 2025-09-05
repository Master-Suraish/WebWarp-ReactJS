import React, { useState, useEffect } from "react";

const MovieFinder = () => {
  const [query, setQuery] = useState("");
  const [allMovies, setAllMovies] = useState("");
  // const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //* State for debounce effect :
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  //* Debounce effect by ChatGPT :
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [query]);

  //* Main OMDB API function :
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");

      const searchQuery =
        debouncedQuery.trim() === "" ? "Avengers" : debouncedQuery;

      try {
        const responseSearch = await fetch(
          `http://www.omdbapi.com/?s=${searchQuery}&apikey=acd0e466`
        );
        const dataSearch = await responseSearch.json();

        if (dataSearch.Response === "True") {
          //* fetch details for each movie

          const detailsMovies = dataSearch.Search.map(async (obj) => {
            const responseInfo = await fetch(
              `http://www.omdbapi.com/?i=${obj.imdbID}&apikey=acd0e466`
            );
            const dataInfo = await responseInfo.json();

            return dataInfo;
          });
          const detailsMoviesData = await Promise.all(detailsMovies);

          setAllMovies(detailsMoviesData);
        } else {
          setError("Movie not found!");
          setAllMovies([]);
        }
      } catch (err) {
        setError("Something went wrong!");
      }

      setLoading(false);
    };

    fetchMovie();
  }, [debouncedQuery]);

  return (
    <div>
      <div className="bg-gray-900 flex justify-center h-50 items-center">
        <div className="flex flex-col justify-evenly h-50 items-center">
          <div>
            <p className="text-4xl font-bold text-yellow-400">
              Welcome! To WatchMania.com
            </p>
            <p className="text-[18px] font-semibold text-center  text-white">
              All your movies, TV Episodes and Web Series in one place.
            </p>
          </div>
          <input
            className="rounded-xl p-2 w-130 h-10 outline-2 text-[18px] text-white focus:text-yellow-400 font-semibold outline-white focus:outline-yellow-400"
            type="text"
            placeholder="Search Movie/Series here."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      {/* {error && <p className="text-red-500">{error}</p>} */}
      {loading === true && (
        <div className="flex pt-10 justify-center h-screen bg-gray-900">
          <div className="w-80 h-80 rounded-full  border-15 border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500 animate-spin"></div>
        </div>
      )}
      <div className="bg-gray-900 grid md:grid-cols-2 gap-y-20 ps-20 pt-10">
        {allMovies &&
          loading === false &&
          allMovies.map((obj) => {
            return (
              <div
                key={obj.imdbID}
                className="bg-blue-100 w-155 h-130 rounded-4xl "
              >
                <div
                  className="h-130 w-155 border-2 border-white rounded-4xl"
                  style={{
                    backgroundImage: `url(${obj.Poster})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="h-130 w-155 flex justify-evenly items-center bg-black/50 rounded-4xl">
                    {/* <div className="bg-red-100 flex w-150 justify-evenly"> */}
                    <div className="">
                      <img
                        src={obj.Poster}
                        className="h-70 border-2 border-white p-1 rounded-2xl"
                        alt=""
                      />
                    </div>

                    <div className="bg-black/30 rounded-2xl h-120 w-90 font-semibold text-white">
                      <div>
                        <p className="text-2xl font-bold text-center mt-2">
                          {obj.Title} ({obj.Year})
                        </p>
                        <p className="text-center text-gray-300">
                          {obj.Actors}
                        </p>
                      </div>

                      <div className="bg-green ps-3 h-90 flex flex-col justify-evenly">
                        <p>
                          Type
                          <span className="text-yellow-400 ms-20">
                            {obj.Type}
                          </span>
                        </p>
                        <p>
                          Country
                          <span className="text-yellow-400 ms-14">
                            {obj.Country}
                          </span>
                        </p>
                        <p className="flex">
                          Director
                          <p className="text-yellow-400 ms-14">
                            {obj.Director}
                          </p>
                        </p>
                        <p className="flex">
                          Languge
                          <p className="text-yellow-400 ms-13">
                            {obj.Language}
                          </p>
                        </p>

                        <p>
                          Release Date
                          <span className="text-yellow-400 ms-5">
                            {obj.Released}
                          </span>
                        </p>
                        <p>
                          IMDB Rating
                          <span className="text-yellow-400 ms-5">
                            {obj.imdbRating}
                          </span>
                        </p>
                        <p>
                          IMDB Votes
                          <span className="text-yellow-400 ms-7">
                            {obj.imdbVotes}
                          </span>
                        </p>

                        <p className="text-yellow-400 border-2 p-1 ps-2 rounded-2xl  border-white me-3">
                          {obj.Plot},
                        </p>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieFinder;
