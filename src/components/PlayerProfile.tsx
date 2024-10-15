import React, { useState, useEffect } from 'react';
import { Player } from '../types';
import { UserCircle } from 'lucide-react';
import AbilitySlider from './AbilitySlider';

interface PlayerProfileProps {
  player: Player;
  onUpdatePlayer: (player: Player) => void;
}

const positions = [
  { name: '골키퍼', icon: '🧤' },
  { name: '수비수', icon: '🛡️' },
  { name: '미드필더', icon: '⚙️' },
  { name: '공격수', icon: '⚽' },
];

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  player,
  onUpdatePlayer,
}) => {
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age.toString());
  const [position, setPosition] = useState(player.position);
  const [preferredFoot, setPreferredFoot] = useState(player.preferredFoot);
  const [weakFootAbility, setWeakFootAbility] = useState(
    player.weakFootAbility
  );

  const [items, setItems] = useState([]);
  useEffect(() => {
    setName(player.name);
    setAge(player.age.toString());
    setPosition(player.position);
    setPreferredFoot(player.preferredFoot);
    setWeakFootAbility(player.weakFootAbility);
  }, [player]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePlayer({
      ...player,
      name,
      age: parseInt(age),
      position,
      preferredFoot,
      weakFootAbility,
    });
  };

  const getWeakFootLabel = (value: number) => {
    if (value === 0) return '의족';
    if (value === 100) return '양발';
    return `${value}%`;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">내 프로필</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          이름
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          나이
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="position"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          포지션
        </label>
        <div className="grid grid-cols-2 gap-4">
          {positions.map((pos) => (
            <button
              key={pos.name}
              type="button"
              onClick={() => setPosition(pos.name)}
              className={`flex items-center justify-center p-3 rounded-md ${
                position === pos.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              <span className="text-2xl mr-2">{pos.icon}</span>
              <span>{pos.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="preferredFoot"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          주발
        </label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setPreferredFoot('left')}
            className={`flex-1 py-2 px-4 rounded-md ${
              preferredFoot === 'left'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            } hover:bg-blue-500 hover:text-white transition-colors`}
          >
            왼발 👈
          </button>
          <button
            type="button"
            onClick={() => setPreferredFoot('right')}
            className={`flex-1 py-2 px-4 rounded-md ${
              preferredFoot === 'right'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            } hover:bg-blue-500 hover:text-white transition-colors`}
          >
            오른발 👉
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative"></div>
      </div>
      <AbilitySlider label={'약발'} maxLabel={'양발'} minLabel={'의족'} />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
      >
        <UserCircle className="mr-2" />
        프로필 업데이트
      </button>
    </form>
  );
};

export default PlayerProfile;
