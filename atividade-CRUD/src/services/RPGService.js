const Character = require("../models/Character");
const MagicItem = require("../models/MagicItem");

class RPGService {
  constructor() {
    this.characters = new Map();
    this.magicItems = new Map();
  }

  // CRUD Personagem
  // POST Character
  createCharacter(
    id,
    name,
    adventurerName,
    characterClass,
    level,
    strength,
    defense
  ) {
    if (this.characters.has(id)) {
      throw new Error("Personagem já existe com este ID");
    }

    if (strength + defense !== 10) {
      throw new Error("A soma dos pontos deve ser exatamente 10");
    }

    const character = new Character(
      id,
      name,
      adventurerName,
      characterClass,
      level
    );
    character.distributePoints(strength, defense);
    this.characters.set(id, character);
    return character;
  }

  // GET Character
  listCharacters() {
    return Array.from(this.characters.values());
  }

  // GET Character BY ID
  getCharacterById(id) {
    const character = this.characters.get(id);
    if (!character) {
      throw new Error("Personagem não encontrada");
    }
    return character;
  }

  // UPDATE Adventurer Name
  updateAdventurerName(id, newAdventurerName) {
    const character = this.getCharacterById(id);
    character.adventurerName = newAdventurerName;
    return character;
  }

  // DELETE Character
  removeCharacter(id) {
    if (!this.characters.has(id)) {
      throw new Error("Personagem não encontrada");
    }
    this.characters.delete(id);
  }

  // CRUD Item Mágico
  // POST Magic Item
  createMagicItem(id, name, type, strength, defense) {
    if (this.magicItems.has(id)) {
      throw new Error("Item Mágico já existe com este ID");
    }

    const magicItem = new MagicItem(id, name, type, strength, defense);
    this.magicItems.set(id, magicItem);
    return magicItem;
  }

  addMagicItem(id, name, type, strength, defense) {
    return this.createMagicItem(id, name, type, strength, defense);
  }

  // GET Magic Item
  listMagicItems() {
    return Array.from(this.magicItems.values());
  }

  // GET Magic Item BY ID
  getMagicItemById(id) {
    const magicItem = this.magicItems.get(id);
    if (!magicItem) {
      throw new Error("Item Mágico não encontrado");
    }
    return magicItem;
  }

  // Relacionamentos
  // POST Magic Item to Character
  addMagicItemToCharacter(characterId, magicItemId) {
    const character = this.getCharacterById(characterId);
    const magicItem = this.getMagicItemById(magicItemId);
    character.addMagicItem(magicItem);
    return character;
  }

  // GET Magic Items BY Character ID
  listMagicItemsByCharacter(characterId) {
    const character = this.getCharacterById(characterId);
    return character.magicItems;
  }

  // DELETE Magic Item from Character BY ID
  removeMagicItemFromCharacter(characterId, magicItemId) {
    const character = this.getCharacterById(characterId);
    character.removeMagicItem(magicItemId);
    return character;
  }

  // GET Amulet BY Character ID
  getCharacterAmulet(characterId) {
    const character = this.getCharacterById(characterId);
    const amulet = character.magicItems.find((item) => item.type === "Amuleto");
    if (!amulet) {
      throw new Error("Personagem não possui amuleto");
    }
    return amulet;
  }
}

module.exports = RPGService;
