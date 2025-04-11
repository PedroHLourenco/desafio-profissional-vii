class Character {
  constructor(id, name, adventurerName, characterClass, level) {
    if (
      !["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"].includes(
        characterClass
      )
    ) {
      throw new Error("Classe inválida");
    }

    this.id = id;
    this.name = name;
    this.adventurerName = adventurerName;
    this.characterClass = characterClass;
    this.level = level;
    this.magicItems = [];
    this.strength = 0;
    this.defense = 0;
  }

  distributePoints(strength, defense) {
    if (strength + defense !== 10) {
      throw new Error("A soma dos pontos deve ser exatamente 10");
    }
    if (strength < 0 || defense < 0) {
      throw new Error("Os valores não podem ser negativos");
    }

    this.strength = strength;
    this.defense = defense;
  }

  addMagicItem(item) {
    if (item.type === "Amuleto") {
      const hasAmulet = this.magicItems.some((i) => i.type === "Amuleto");
      if (hasAmulet) {
        throw new Error("Personagem já possui um amuleto");
      }
    }
    this.magicItems.push(item);
  }

  removeMagicItem(itemId) {
    this.magicItems = this.magicItems.filter((item) => item.id !== itemId);
  }

  getTotalStrength() {
    return (
      this.strength +
      this.magicItems.reduce((total, item) => total + item.strength, 0)
    );
  }

  getTotalDefense() {
    return (
      this.defense +
      this.magicItems.reduce((total, item) => total + item.defense, 0)
    );
  }
}

module.exports = Character;
