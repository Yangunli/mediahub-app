import axios from "axios";
import React, { useEffect } from "react";
import { Chip, createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
  },
});

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const API_KEY = "2b2dbfafdd3b2b1918dde58820b8fc6a";

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      <ThemeProvider theme={darkTheme}>
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              color="primary"
              clickable
              size="small"
              onDelete={() => handleRemove(genre)}
            />
          ))}
        {genres &&
          genres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              clickable
              size="small"
              onClick={() => handleAdd(genre)}
            />
          ))}
      </ThemeProvider>
    </div>
  );
};

export default Genres;
