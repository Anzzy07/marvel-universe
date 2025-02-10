import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { SearchCharacters } from "./pages/SearchCharacters";
import { CharacterProfile } from "./pages/CharacterProfile";
import { FavoriteCharacter } from "./pages/FavoriteCharacter";
import { Settings } from "./pages/Settings";
import { CharacterDetails } from "./pages/CharacterDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search-characters" element={<SearchCharacters />} />
          <Route path="character-details" element={<CharacterProfile />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="saved-characters" element={<FavoriteCharacter />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
