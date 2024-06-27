import converters from './converters.js';

Hooks.on('init', () => {
  game.settings.register('pf1-fr-babele', 'autoRegisterBabel', {
    name: 'Activer automatiquement la traduction via Babele',
    hint: 'Met automatiquement en place les traductions au sein de Babele sans avoir besoin de pointer vers le répertoire contenant les traductions.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  game.settings.register('pf1-fr-babele', 'usePf2eTokensBestiaries', {
    name: 'Utilisation du module premium Pathfinder Token Pack: Bestiaries',
    hint: 'Remplace le portrait et le token des bestiaires qui ont une correspondance avec ce que propose le module.',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
    onChange: () => window.location.reload(),
  });

  converters.usePf2eTokensBestiaries = game.settings.get('pf1-fr-babele', 'usePf2eTokensBestiaries');

  Babele.get().registerConverters({
    actions: converters.actions,
    arrayOfArray: converters.arrayOfArray,
    contextNotes: converters.contextNotes,
    flagsDictionary: converters.flagsDictionary,
    learnedAt: converters.learnedAt,
    pf2TokensBestiaries: converters.pf2TokensBestiaries,
    tableRollText: converters.tableRollText,
    simpleArray: converters.simpleArray,
    subSchool: converters.translateSubSchool,
  });

  if (game.settings.get('pf1-fr-babele', 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pf1-fr-babele',
      lang: 'fr',
      dir: 'compendium/fr',
    });
  }
}
