import React from 'react';
import { Player } from '../types';
import { User } from 'lucide-react';

interface PlayerDetailsProps {
  player: Player | null;
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ player }) => {
  if (!player) {
    return <div className="text-center text-gray-500">선수를 선택해주세요.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <User className="h-16 w-16 text-blue-600 mr-4" />
        <h2 className="text-2xl font-bold">{player.name}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">나이</p>
          <p className="font-semibold">{player.age}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">포지션</p>
          <p className="font-semibold">{player.position}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">등번호</p>
          <p className="font-semibold">{player.jerseyNumber}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">팀</p>
          <p className="font-semibold">{player.team}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;