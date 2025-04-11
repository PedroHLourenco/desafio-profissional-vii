const express = require("express");
const RPGService = require("./services/RPGService");

const app = express();
const rpgService = new RPGService();

app.use(express.json());

// Rotas para Personagens
app.post("/characters", (req, res) => {
  try {
    const {
      id,
      name,
      adventurerName,
      characterClass,
      level,
      strength,
      defense,
    } = req.body;
    const character = rpgService.createCharacter(
      id,
      name,
      adventurerName,
      characterClass,
      level,
      strength,
      defense
    );
    res.status(201).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/characters", (req, res) => {
  const characters = rpgService.listCharacters();
  res.json(characters);
});

app.get("/characters/:id", (req, res) => {
  try {
    const character = rpgService.getCharacterById(req.params.id);
    res.json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.put("/characters/:id/adventurer-name", (req, res) => {
  try {
    const { newAdventurerName } = req.body;
    const character = rpgService.updateAdventurerName(
      req.params.id,
      newAdventurerName
    );
    res.json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete("/characters/:id", (req, res) => {
  try {
    rpgService.removeCharacter(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rotas para Itens Mágicos
app.post("/magic-items", (req, res) => {
  try {
    const { id, name, type, strength, defense } = req.body;
    const magicItem = rpgService.createMagicItem(
      id,
      name,
      type,
      strength,
      defense
    );
    res.status(201).json(magicItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/magic-items", (req, res) => {
  const magicItems = rpgService.listMagicItems();
  res.json(magicItems);
});

app.get("/magic-items/:id", (req, res) => {
  try {
    const magicItem = rpgService.getMagicItemById(req.params.id);
    res.json(magicItem);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rotas para Relacionamentos
app.post("/characters/:characterId/magic-items/:magicItemId", (req, res) => {
  try {
    const character = rpgService.addMagicItemToCharacter(
      req.params.characterId,
      req.params.magicItemId
    );
    res.json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/characters/:characterId/magic-items", (req, res) => {
  try {
    const items = rpgService.listMagicItemsByCharacter(req.params.characterId);
    res.json(items);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete("/characters/:characterId/magic-items/:magicItemId", (req, res) => {
  try {
    const character = rpgService.removeMagicItemFromCharacter(
      req.params.characterId,
      req.params.magicItemId
    );
    res.json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/characters/:characterId/amulet", (req, res) => {
  try {
    const amulet = rpgService.getCharacterAmulet(req.params.characterId);
    res.json(amulet);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
