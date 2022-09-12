# Pathfinder 1 - Traduction FR (Babele)

Ce module permet de traduire les différents compendium du système [Pathfinder 1](https://foundryvtt.com/packages/pf1)
ainsi que les bestiaires du module [Pathfinder 1e - Bestiary](https://foundryvtt.com/packages/pf1-bestiary) en
utilisant [Babele](https://foundryvtt.com/packages/babele).

## Quelle différence par rapport au module [Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr)

`Pathfinder 1 - Improvements for French` ne traduit pas les compendium, il en crée des nouveaux à la place ce qui
engendre parfois quelques problèmes avec les différentes automatisations proposées par le système de base.

L'avantage de passer par Babele est qu'il n'y a aucune création de compendium, seulement de la traduction à la volée.
Grâce à cela, les automatismes de base du système fonctionnent directement.

## Installation

Le module est installable directement depuis Foundry en recherchant son nom : `Pathfinder 1 - Traduction FR (Babele)`.
Vous aurez alors la dernière version et profiterez des mises à jour automatiques.

Sinon, il est possible l'ajouter en utilisant le lien de son manifest :
`https://raw.githubusercontent.com/DjLeChuck/foundryvtt-pf1-fr-babele/main/module.json`

## État d'avancement

Pour chaque fichier, nombre de termes existants dans le compendium, nombre de termes non traduits et nombre de termes
déjà traduits.

<!-- STATS - BEGIN -->
| Pack | Nb. termes | Nb. non traduits | Nb. traduits |
|---|---|---|---|
| armors-and-shields | 64 | 0 | 64 |
| bestiary-00 | 386 | 0 | 386 |
| bestiary-02 | 452 | 180 | 272 |
| bestiary-04 | 420 | 208 | 212 |
| bestiary-06 | 392 | 197 | 195 |
| bestiary-08 | 468 | 234 | 234 |
| bestiary-11 | 426 | 175 | 251 |
| bestiary-15 | 323 | 85 | 238 |
| bestiary-20 | 156 | 0 | 156 |
| class-abilities | 4363 | 3307 | 1056 |
| classes | 51 | 0 | 51 |
| commonbuffs | 26 | 0 | 26 |
| conditions | 35 | 0 | 35 |
| feats | 177 | 0 | 177 |
| items | 736 | 415 | 321 |
| monster-templates | 189 | 143 | 46 |
| mythic-paths | 6 | 0 | 6 |
| races | 79 | 0 | 79 |
| racial-hd | 13 | 0 | 13 |
| skills | 26 | 0 | 26 |
| spells | 2944 | 966 | 1978 |
| ultimate-equipment | 227 | 0 | 227 |
| weapons-and-ammo | 491 | 236 | 255 |
<!-- STATS - END -->

## Comment contribuer ?

À la base, le module était composé uniquement des traductions issues du module
[Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr) ce qui fait qu'il y a énormément
d'entrées qui ne sont pas traduites car il n'en existe pas de référencées sur le
wiki [Pathfinder-Fr](https://www.pathfinder-fr.org/).

À présent, afin de faciliter la gestion des traductions, une interface web a été mise en place pour permettre à
chacun de contribuer sans avoir à passer par GitHub tout en disposant d'une interface de saisie et de mise en forme
bien plus agréable que les fichiers JSON de base !

Ce site n'est accessible qu'aux personnes présentes sur le Discord [La Fonderie](https://discord.com/invite/pPSDNJk)
(une connexion via Discord est nécessaire pour accéder à l'interface de traduction et une vérification est faîtes sur
l'appartenance au serveur).

Quand on va traduire, la première chose à faire est de regarder s'il existe une traduction sur
[le wiki FR de Pathfinder](https://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.MainPage.ashx). Si une traduction est
disponible, alors on peut l'utiliser sans-souci.

S'il n'y en a pas, alors on doit traduire soi-même en respectant le lore de Pathfinder, donc en vérifiant si des termes
spécifiques sont à utiliser ou non. Pour ces cas-là, il y a un bouton qui permet de traduire automatiquement le texte
de description anglais vers le français **afin d'avoir une base de travail seulement**. La traduction automatique ne
doit en aucun cas être laissée sans vérification, car le rendu sera forcément approximatif et n'aura pas gardé les
potentielles mises en forme existantes.

### Ressources utiles :

* [Glossaire VO / VF tenu par le wiki FR de Pathfinder](https://docs.google.com/spreadsheets/d/1MZ5Nz424T1CRSNi00Ky7jG-TrcKZeCYgqoClRjTfaXQ/edit#gid=660929381)
* [Document de référence du système VO](https://www.d20pfsrd.com/)
* [Archives of Nethys](https://www.aonprd.com/)

## Remerciements

Merci à tous ceux qui ont travaillés sur le
module [Pathfinder 1 - Improvements for French](https://foundryvtt.com/packages/pf1-fr)
et, plus largement, sur le wiki [Pathfinder-Fr](https://www.pathfinder-fr.org/) car sans eux ce module ne pourrait
exister.

## Notes légales

Ce module pour FoundryVTT utilise des marques déposées et/ou des droits d’auteurs qui sont la propriété de Black Book
Editions et de Paizo Publishing comme l’y autorisent les conditions d’utilisation de Black Book Editions.
Ce module n’est pas publié par Black Book Editions / Paizo Publishing et n’a pas reçu son aval ni une quelconque
approbation de sa part. Pour de plus amples informations sur Black Book Editions, consultez
[www.black-book-editions.fr](www.black-book-editions.fr). Pour plus d’informations sur les conditions d’utilisation de
la Paizo Community Use Policy, veuillez vous rendre sur
[https://paizo.com/community/communityuse](https://paizo.com/community/communityuse).
