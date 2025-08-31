import React, { useState, useEffect } from "react";

function BookLibrary() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");

  // Default books shown on home (can change query)
  const defaultQuery = "harry potter";

  // Fetch books from Google Books API
  const fetchBooks = async (search = defaultQuery) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`
    );
    const data = await res.json();
    setBooks(data.items || []);
  };

  // Load default books on first render
  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle search button
  const handleSearch = () => {
    fetchBooks(query || defaultQuery);
  };

  // Genre options (you can expand this list)
  const genres = [
    "all",
    "fiction",
    "fantasy",
    "romance",
    "history",
    "science",
    "biography",
  ];

  // Filter by genre (if genre !== all)
  const filteredBooks =
    genre === "all"
      ? books
      : books.filter((book) =>
          book.volumeInfo.categories?.some((c) =>
            c.toLowerCase().includes(genre.toLowerCase())
          )
        );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Book Library</h2>

      {/* Search + Genre */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Book List */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => {
            const info = book.volumeInfo;
            return (
              <div
                key={book.id}
                style={{
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <h3>{info.title}</h3>
                <p>
                  <strong>Author(s):</strong> {info.authors?.join(", ")}
                </p>
                <p>
                  <strong>Genre:</strong>{" "}
                  {info.categories ? info.categories.join(", ") : "N/A"}
                </p>
                <p>
                  <strong>Story</strong>{" "}
                  {info.description ? info.description : "N/A"}
                </p>
                {info.imageLinks?.thumbnail && (
                  <img src={info.imageLinks.thumbnail} alt={info.title} />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default BookLibrary;
