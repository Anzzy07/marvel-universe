import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { SearchCharacters } from "./components/SearchCharacters";
import { CharacterProfile } from "./components/CharacterProfile";
import { FavoriteCharacter } from "./components/FavoriteCharacter";
import { Settings } from "./components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search-characters" element={<SearchCharacters />} />
          <Route path="character-details" element={<CharacterProfile />} />
          <Route path="saved-characters" element={<FavoriteCharacter />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
