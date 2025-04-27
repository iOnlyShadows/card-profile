import { useState } from 'react';
import ProfileCardStyled from '../components/ProfileCardStyled';

function StyledPg() {
  const [user, setUser] = useState<any>(null);
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      fetch(`https://api.github.com/users/${input.trim()}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      {/* INPUT + BOTÃO  */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="bg-[#111] border-2 border-green-400 p-4 rounded-lg shadow-lg shadow-green-400 flex gap-4">
          <input
            type="text"
            placeholder="Digite o username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-black text-green-400 border border-green-400 p-2 rounded focus:outline-none placeholder-green-600"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black transition font-bold"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* CARD */}
      {user ? (
        <ProfileCardStyled user={user} />
      ) : (
        <p className="text-green-400">Digite um username para buscar.</p>
      )}
    </div>
  );
}

export default StyledPg;
