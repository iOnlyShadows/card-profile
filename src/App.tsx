import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MatrixBackground from './components/MatrixBackground'
import StyledPg from './pages/StyledPg'
import TailwindPg from './pages/TailwindPg'

function App() {
  return (
    <Router>
      <div className="relative overflow-hidden min-h-screen">
        {/* fundo Matrix */}
        <MatrixBackground />

        {/* seu conteúdo por cima */}
        <div className="relative z-10">
          <nav className="flex justify-center mt-4">
            <div className="bg-[#111] border-2 border-green-400 p-4 rounded-lg shadow-lg shadow-green-400 flex gap-6">
              <Link
                to="/styled"
                className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black transition font-bold"
              >
                Styled Page
              </Link>
              <Link
                to="/tailwind"
                className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black transition font-bold"
              >
                Tailwind Page
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/styled" element={<StyledPg />} />
            <Route path="/tailwind" element={<TailwindPg />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
