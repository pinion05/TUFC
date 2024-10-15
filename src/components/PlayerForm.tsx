import React, { useState } from 'react';
import { Player } from '../types';

interface PlayerFormProps {
  onAddPlayer: (player: Omit<Player, 'id'>) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ onAddPlayer }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPlayer({
      name,
      age: parseInt(age),
      position,
      jerseyNumber: parseInt(jerseyNumber),
      team,
    });
    setName('');
    setAge('');
    setPosition('');
    setJerseyNumber('');
    setTeam('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">새 선수 추가</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
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
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">나이</label>
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
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">포지션</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="jerseyNumber" className="block text-sm font-medium text-gray-700">등번호</label>
        <input
          type="number"
          id="jerseyNumber"
          value={jerseyNumber}
          onChange={(e) => setJerseyNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="team" className="block text-sm font-medium text-gray-700">팀</label>
        <input
          type="text"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        선수 추가
      </button>
    </form>
  );
};

export default PlayerForm;