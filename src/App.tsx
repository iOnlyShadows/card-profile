import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import StyledPg from './pages/StyledPg';
import TailwindPg from './pages/TailwindPg';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <Router>
      <div className="relative overflow-hidden min-h-screen">
        {/* Fundo Matrix */}
        <MatrixBackground />

        {/* Conteúdo sobre o fundo */}
        <div className="relative z-10">
          {/* Menu de navegação */}
          <nav className="flex justify-center mt-4">
            <div className="bg-[#111] border-2 border-green-400 p-4 rounded-lg shadow-lg shadow-green-400 flex gap-6">
              <NavLink
                to="/styled"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-2 border border-green-400 rounded bg-green-400 text-black font-bold transition shadow-md shadow-green-400"
                    : "px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black font-bold transition text-green-400"
                }
              >
                Styled Page
              </NavLink>
              <NavLink
                to="/tailwind"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-2 border border-red-400 rounded bg-red-400 text-black font-bold transition shadow-md shadow-red-400"
                    : "px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black font-bold transition text-green-400"
                }
              >
                Tailwind Page
              </NavLink>
            </div>
          </nav>

          {/* Rotas */}
          <Routes>
            <Route path="/styled" element={<StyledPg />} />
            <Route path="/tailwind" element={<TailwindPg />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
