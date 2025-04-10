# Sistema de Gerenciamento de RPG

Este é um sistema de gerenciamento para um jogo de RPG (Role-Playing Game) desenvolvido em TypeScript. O sistema permite o gerenciamento de Personagens e Itens Mágicos.

## Funcionalidades

- Criação e gerenciamento de personagens
- Sistema de atributos (Força e Defesa)
- Gerenciamento de itens mágicos
- Cálculo automático de estatísticas totais
- Validações de regras de negócio

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

## Como Executar

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Para compilar o projeto:

```bash
npm run build
```

Para executar o projeto compilado:

```bash
npm start
```

## Estrutura do Projeto

```
src/
  ├── entities/         # Classes principais
  │   ├── Character.ts
  │   └── MagicItem.ts
  ├── types/           # Tipos e interfaces
  │   └── index.ts
  └── index.ts         # Arquivo principal
```

## Regras de Negócio

1. Personagens têm 10 pontos para distribuir entre Força e Defesa
2. Classes disponíveis: Guerreiro, Mago, Arqueiro, Ladino e Bardo
3. Personagens podem carregar vários itens mágicos
4. Cada personagem pode ter apenas 1 amuleto
5. Os atributos Força e Defesa consideram os valores dos itens mágicos

## Exemplo de Uso

```typescript
// Criando um personagem
const warrior = new Character(
  "1",
  "João",
  "Aragorn",
  CharacterClass.GUERREIRO,
  1,
  7, // Força base
  3 // Defesa base
);

// Criando um item mágico
const sword = new MagicItem(
  "1",
  "Espada Flamejante",
  ItemType.ARMA,
  5,
  0,
  warrior.id
);

// Adicionando item ao personagem
warrior.addMagicItem(sword);

// Obtendo estatísticas
console.log(warrior.getStats());
```
