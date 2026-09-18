import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChampionCard from './components/ChampionCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChampionCard/>
  </StrictMode>,
)
