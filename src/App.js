import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/mediahub-app/" element={<Trending />} exact />
            <Route path="/mediahub-app/movies" element={<Movies />} />
            <Route path="/mediahub-app/series" element={<Series />} />
            <Route path="/mediahub-app/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
