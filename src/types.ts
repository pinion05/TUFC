export interface Player {
  id: string;
  name: string;
  age: number;
  position: '골키퍼' | '공격수' | '수비수' | '미드필더';
  preferredFoot: 'left' | 'right';
  weakFootAbility: number; // 0 to 100
  speed: number; // 0 to 100
  shooting: number; // same
}

export interface Performance {
  speed: number;
  shooting: number;
}
