import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharactersPage from './pages/Characters'
import { CrewsPage } from './pages/Crews'
import { RacesPage } from './pages/Races'
import { DevilsFruitsPage } from './pages/DevilsFruits'
import { HakisPage } from './pages/Hakis'
import { OriginsPage } from './pages/Origins'
import { CharacterDetails } from './pages/CharacterDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/crews" element={<CrewsPage />} />
        <Route path="/races" element={<RacesPage />} />
        <Route path="/devil-fruits" element={<DevilsFruitsPage />} />
        <Route path="/hakis" element={<HakisPage />} />
        <Route path="/origins" element={<OriginsPage />} />
      </Routes>
    </Router>
  )
}

export default App
