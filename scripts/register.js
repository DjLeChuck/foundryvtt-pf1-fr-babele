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

  game.settings.register('pf1-fr-babele', 'autoTranslateOnCreateActor', {
    name: 'Traduire automatiquement les objets d\'un acteur lors de sa création',
    hint: 'Utilise Babele afin de traduire les objets de l\'acteur (race, classe, inventaire, etc.). Il s\'agit de la même fonctionnalité que le bouton "Traduire" propulsé par Babele en-tête de fiche.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  if (game.settings.get('pf1-fr-babele', 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

Hooks.on('createActor', async actor => {
  if (
    'character' === actor.type &&
    game.settings.get('pf1-fr-babele', 'autoTranslateOnCreateActor') &&
    typeof Babele !== 'undefined'
  ) {
    /*
     * Function taken from Babele module
     * @see https://gitlab.com/riccisi/foundryvtt-babele/-/blob/2.2.6/module/babele.js#L969-L998
     */
    const items = actor.items.contents.length;
    const updates = [];

    for (let idx = 0; idx < items; idx++) {
      const item = actor.items.contents[idx];
      const data = item.toObject();
      const pack = game.babele.packs.find(pack => pack.translated && pack.hasTranslation(data));

      if (pack) {
        const translatedData = pack.translate(data, true);
        updates.push(mergeObject(translatedData, { _id: item.id }));
      }
    }

    if (updates.length) {
      await actor.updateEmbeddedDocuments('Item', updates);
    }
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
