Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pf1-fr-babele',
      lang: 'fr',
      dir: 'compendium/fr',
    });
  }
});
