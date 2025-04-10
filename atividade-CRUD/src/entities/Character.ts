import { CharacterClass, ICharacter, IMagicItem, ItemType } from "../types";

export class Character implements ICharacter {
  public id: string;
  public name: string;
  public adventurerName: string;
  public class: CharacterClass;
  public level: number;
  public baseStrength: number;
  public baseDefense: number;
  public magicItems: IMagicItem[];

  constructor(
    id: string,
    name: string,
    adventurerName: string,
    characterClass: CharacterClass,
    level: number,
    baseStrength: number,
    baseDefense: number
  ) {
    this.id = id;
    this.name = name;
    this.adventurerName = adventurerName;
    this.class = characterClass;
    this.level = level;
    this.baseStrength = baseStrength;
    this.baseDefense = baseDefense;
    this.magicItems = [];
  }
}
