const useGenre = (selectedGenres) => {
  if (selectedGenres.length === 0) return "";

  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
