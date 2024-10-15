import React, { useState } from 'react';

interface AbilitySliderProps {
  label: string;
  minLabel: string;
  maxLabel: string;
}

const AbilitySlider: React.FC<AbilitySliderProps> = ({
  label,
  minLabel,
  maxLabel,
}) => {
  const [value, setValue] = useState(50); // 초기값을 50으로 설정
  const min = 0; // 최소값 고정
  const max = 100; // 최대값 고정

  const getAbilityLabel = (value: number) => {
    if (value === min) return minLabel;
    if (value === max) return maxLabel;
    return `${value}%`;
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-600 px-2 mt-2">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
      <div className="text-center mt-2 font-semibold text-blue-600">
        {getAbilityLabel(value)}
      </div>
    </div>
  );
};

export default AbilitySlider;
