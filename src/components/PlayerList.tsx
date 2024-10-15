import React from 'react';
import { Player } from '../types';
import { User } from 'lucide-react';

interface PlayerListProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onSelectPlayer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-xl font-bold p-4 bg-blue-600 text-white">선수 목록</h2>
      <ul className="divide-y divide-gray-200">
        {players.map((player) => (
          <li
            key={player.id}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelectPlayer(player)}
          >
            <User className="h-10 w-10 text-gray-400 mr-4" />
            <div>
              <p className="font-semibold">{player.name}</p>
              <p className="text-sm text-gray-500">{player.position} | 번호: {player.jerseyNumber}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;