import React, { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "acd0e466"; // Replace with your OMDb key

  const searchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${query}&apikey=acd0e466`
      );

      const data = await res.json();
      setMovies(data.Search || []); // OMDb returns "Search" array
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎬 Movie Finder</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      {/* Results */}
      <div style={{ marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ marginBottom: "15px" }}>
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
            <h3>{console.log(movie)}</h3>

            {movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt={movie.Title} width="120" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
