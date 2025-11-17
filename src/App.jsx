import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import InstallPrompt from './ui/InstallPrompt'

export default function App(){
  return (
    <div>
      <header className="site-header">
        <h1>Responsi Modul 4 PWA</h1>
        <nav>
          <Link to="/">Beranda</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profil</Link>
        </nav>
        <InstallPrompt />
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Denzel Helguera Simanjutak - Responsi Modul 4 PWA (React + Vite)</p>
      </footer>
    </div>
  )
}

