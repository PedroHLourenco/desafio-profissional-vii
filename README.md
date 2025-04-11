# Problemática

Você foi contratado para desenvolver um sistema de gerenciamento para um jogo de RPG (Role-Playing Game). O sistema deve permitir o gerenciamento de Personagens e Itens Mágicos. Cada personagem pode carregar vários itens mágicos, e cada item mágico está vinculado a um personagem.

## Entidades e Atributos

### Personagem

Descrição da Entidade Personagem, com definições e Atributos.

#### Definições

Na criação do Personagem ele terá 10 pontos para Distribuir entre Força e Defesa, do jeito que desejar, não passando dos 10 pontos disponíveis (ex: 5-5, 6-4, 10-0). Os valores serão apresentados nas informações do Personagem e devem considerar os Itens Mágicos do Personagem, somando a força e a defesa dos itens do Personagem para exibição.
As classes somente serão essas Listadas, não podendo existir Personagens com outras classes vinculadas.
Na exibição dos dados do Personagem, os atributos Força e Defesa, consideram os valores dos Itens Mágicos, que devem ser somados aos valores do Personagem.
O Personagem só pode possuir 1 Item Mágico do tipo Amuleto.

#### Atributos do Personagem

- Identificador;
- Nome;
- Nome Aventureiro;
- Classe (Guerreiro, Mago, Arqueiro, Ladino ou Bardo)
- Level;
- Lista de Itens Mágicos;
- Força;
- Defesa;

### Item Mágico

Descrição da Entidade Item Mágico, com definições e Atributos.

#### Definições

Os Tipos do Item somente serão esses Listadas, não podendo existir Itens Mágicos com outros tipos vinculados.
Quando um Item for do Tipo Arma, a Defesa dele será OBRIGATORIAMENTE zero.
Quando um Item for do Tipo Armadura, a Força dele será OBRIGATORIAMENTE zero.
Quando um Item for do Tipo Amuleto, ele poderá ter Força e Defesa, porém o Personagem só pode possuir 1 Item Mágico do tipo Amuleto.
Os atributos Força e Defesa, podem ser no máximo 10.
Não podem existir Itens com zero de Defesa e zero de Força.

#### Atributos Item Mágico

- Identificador;
- Nome;
- Tipo do Item (Arma, Armadura e Amuleto);
- Força;
- Defesa;

## Features

Serão necessários os mapeamentos abaixo (Entrega dessa documentação por Swagger, ReadMe ou similares).

- Cadastrar Personagem;
- Cadastrar Item Mágico;
- Listar Personagem;
- Buscar Personagem por Identificador;
- Atualizar Nome Aventureiro por Identificador;
- Remover Personagem;
- Adicionar Item Mágico;
- Listar Itens Mágicos;
- Buscar Item Mágico por Identificador;
- Adicionar Item Mágico ao Personagem;
- Listar Itens Mágicos por Personagem;
- Remover Item Mágico do Personagem;
- Buscar Amuleto do Personagem;

# Rotas Utilizadas no Projeto

## Personagem

- POST /characters - Cria um novo personagem
- GET /characters - Lista todos os personagens
- GET /characters/:id - Busca um personagem pelo ID
- PUT /characters/:id/adventurer-name - Atualiza o nome aventureiro
- DELETE /characters/:id - Deleta um personagem

## Item Mágico

- POST /magic-items - Cria um novo item mágico
- GET /magic-items - Lista todos os itens mágicos
- GET /magic-items/:id - Busca um item mágico por ID

## Relacionamentos

- POST /characters/:characterId/magic-items/:magicItemId - Adiciona um item ao personagem
- GET /characters/:characterId/magic-items - Lista todos os itens equipados pelo personagem
- DELETE /characters/:characterId/magic-items/:magicItemId - Remove um item do personagem
- GET /characters/:characterId/amulet - Busca o amuleto equipado pelo personagem
