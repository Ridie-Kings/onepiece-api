export type CharacterType = {
  id: number;
  name: string;
  image: string;
  description: string;
  bounty: string;
  crew: number;
  devil_fruit: number;
  haki: number[];
  imagebg: string;
  alive: boolean;
  origin: number;
  transactions: number[];
  weapons: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
};

export type CrewType = {
  id: number;
  name: string;
  captain: string;
  ship: string;
  image: string;
  description: string;
  flag: string;
  flagnobg: string;
  members: { id: number; position: string }[];
  totalBounty: string;
};

export type DevilFruitType = {
  id: number;
  name: string;
  type: string;
  growth: string;
  superior: string;
  inferior: string;
  awakened: string;
  meaning: string;
  description: string;
  owner: string;
  secondName: string;
  image: string;
};

export type HakiType = {
  id: number;
  type: string;
  name: string;
  description: string;
  famousUsers: string[];
};

export type OriginType = {
  id: number;
  name: string;
  description: string;
  ocean: string;
  locations: { name: string; description: string; image: string }[];
  image: string;
  famousUsers: string[];
};

export type RacesType = {
  id: number;
  name: string;
  type: string;
  image: string;
};
