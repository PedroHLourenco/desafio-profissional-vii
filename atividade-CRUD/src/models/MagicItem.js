class MagicItem {
  constructor(id, name, type, strength, defense) {
    if (!["Arma", "Armadura", "Amuleto"].includes(type)) {
      throw new Error("Tipo de item inválido");
    }

    if (strength < 0 || defense < 0) {
      throw new Error("Os valores não podem ser negativos");
    }

    if (strength + defense === 0) {
      throw new Error("O item não pode ter força e defesa zerados");
    }

    if (strength > 10 || defense > 10) {
      throw new Error("Os valores não podem exceder 10");
    }

    if (type === "Arma" && defense !== 0) {
      throw new Error("Arma deve ter defesa zero");
    }

    if (type === "Armadura" && strength !== 0) {
      throw new Error("Armadura deve ter força zero");
    }

    this.id = id;
    this.name = name;
    this.type = type;
    this.strength = strength;
    this.defense = defense;
  }
}

module.exports = MagicItem;
