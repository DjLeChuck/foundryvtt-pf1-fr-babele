# Pathfinder 1 - Traduction FR (Babele)

Ce module permet de traduire les différents compendium du système Pathfinder 1 en
utilisant [Babele](https://foundryvtt.com/packages/babele).

## Quelle différence par rapport au module [Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr)

Ce module ne traduit pas les compendium, il en crée des nouveaux à la place ce qui engendre parfois quelques problèmes
avec les différentes automatisations proposées par le système de base.

L'avantage de passer par Babele est qu'il n'y a aucune création de compendium, seulement de la traduction à la volée.
Grâce à cela, les automatismes de base du système fonctionnent directement.

## Installation

Pour installer le module, il vous suffit de l'ajouter à Foundry en utilisant le lien de son manifest :
`https://raw.githubusercontent.com/DjLeChuck/foundryvtt-pf1-fr-babele/main/module.json`

## État d'avancement

Pour chaque fichier, nombre de termes existants dans le compendium et nombre de termes déjà traduits.

| Fichier                  | Nb. termes | Nb. termes traduis |
|--------------------------|------------|--------------------|
| `pf1.armors-and-shields` | 64         | 50                 |
| `pf1.class-abilities`    | 4 358      | 0                  |
| `pf1.classes`            | 51         | 50                 |
| `pf1.commonbuffs`        | 26         | 0                  |
| `pf1.conditions`         | 35         | 0                  |
| `pf1.feats`              | 177        | 175                |
| `pf1.items`              | 736        | 157                |
| `pf1.monster-templates`  | 189        | 0                  |
| `pf1.mythicpaths`        | 6          | 0                  |
| `pf1.races`              | 79         | 37                 |
| `pf1.racialhd`           | 13         | 0                  |
| `pf1.skills`             | 26         | 26                 |
| `pf1.spells`             | 2 944      | 2 944              |
| `pf1.ultimate-equipment` | 227        | 0                  |
| `pf1.weapons-and-ammo`   | 493        | 230                |

## Comment contribuer ?

Pour le moment, le module n'est composé que des traductions issues du module
[Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr) ce qui fait qu'il y a énormément
d'entrées qui ne sont pas traduites car il n'en existe pas de référencées sur le
wiki [Pathfinder-Fr](https://www.pathfinder-fr.org/).

Si vous souhaitez participer aux traductions, une [interface](https://pf1-fr-babele.djlechuck.fr/) est disponible pour centraliser les efforts, 
ainsi que simplifier la mise en forme. Notez qu'il est nécessaire d'avoir un compte Discord et d'être membre du [serveur Discord Foundry France](https://discord.com/invite/pPSDNJk).

Vous pouvez aussi faire les modifications dans les différents fichiers concernés, 
puis faire une [pull request](https://github.com/DjLeChuck/foundryvtt-pf1-fr-babele/pulls) afin d'absorber les modifications.

## Remerciements

Merci à tous ceux qui ont travaillés sur le
module [Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr)
et, plus largement, sur le wiki [Pathfinder-Fr](https://www.pathfinder-fr.org/) car sans eux ce module ne pourrait
exister.
