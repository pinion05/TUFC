import React, { useState } from 'react';
import PlayerProfile from './components/PlayerProfile';
import { Player } from './types';
import { UserCircle } from 'lucide-react';

function App() {
  const [player, setPlayer] = useState<Player>({
    id: '1',
    name: '',
    age: 0,
    position: '',
    preferredFoot: 'right',
    weakFootAbility: 50,
  });

  const handleUpdatePlayer = (updatedPlayer: Player) => {
    setPlayer(updatedPlayer);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl font-bold text-gray-800">⚽TUFC</h1>
          </div>
        </header>
        <PlayerProfile player={player} onUpdatePlayer={handleUpdatePlayer} />
      </div>
    </div>
  );
}

export default App;
