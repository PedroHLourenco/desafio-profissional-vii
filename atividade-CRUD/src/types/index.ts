export enum CharacterClass {
  WARRIOR = "Guerreiro",
  MAGE = "Mago",
  ARCHER = "Arqueiro",
  ROGUE = "Ladino",
  BARD = "Bardo",
}

export enum ItemType {
  AMULET = "Amuleto",
  WEAPON = "Arma",
  ARMOR = "Armadura",
  POTION = "Poção",
}

export interface IMagicItem {
  id: string;
  name: string;
  type: ItemType;
  strength: number;
  defense: number;
  characterId: string;
}

export interface ICharacter {
  id: string;
  name: string;
  adventurerName: string;
  class: CharacterClass;
  level: number;
  baseStrength: number;
  baseDefense: number;
  magicItems: IMagicItem[];
}

export interface ICharacterStats {
  totalStrength: number;
  totalDefense: number;
}
