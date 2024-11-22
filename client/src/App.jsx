import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharactersPage from './pages/Characters'
import { CrewsPage } from './pages/Crews'
import { RacesPage } from './pages/Races'
import { DevilsFruitsPage } from './pages/DevilsFruits'
import { HakisPage } from './pages/Hakis'
import { OriginsPage } from './pages/Origins'
import { CharacterDetails } from './pages/CharacterDetails'
import { DocumentationPage } from './pages/Documentation'
import { CrewDetails } from './pages/CrewDetails'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/crews" element={<CrewsPage />} />
        <Route path="/crews/:id" element={<CrewDetails />} />
        <Route path="/races" element={<RacesPage />} />
        <Route path="/devil-fruits" element={<DevilsFruitsPage />} />
        <Route path="/hakis" element={<HakisPage />} />
        <Route path="/origins" element={<OriginsPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App
