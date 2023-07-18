class Converters {
  usePf2eTokensBestiaries = false;

  actions(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      const data = translations[index];

      value[index].effectNotes = data.effectNotes;
      value[index].name = data.name;
      value[index].spellArea = data.spellArea;
      value[index].spellEffect = data.spellEffect;
      value[index].target.value = data.target;

      if (value[index].duration?.value) {
        value[index].duration.value = data.duration;
      }

      if (value[index].range?.value) {
        value[index].range.value = data.range;
      }

      if (value[index].save?.description) {
        value[index].save.description = data.save;
      }

      if (value[index].target?.value) {
        value[index].target.value = data.target;
      }
    });

    return value;
  }

  arrayOfArray(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index] = [translations[index]];
    });

    return value;
  }

  contextNotes(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index].text = translations[index];
    });

    return value;
  }

  flagsDictionary(value, translations) {
    if (!translations) {
      return value;
    }

    translations.forEach((translation) => {
      const [k, v] = translation;

      if (value[k]) {
        value[k] = v;
      }
    });

    return value;
  }

  learnedAt(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index][0] = translations[index];
    });

    return value;
  }

  pf2TokensBestiaries(value, translations) {
    return this.usePf2eTokensBestiaries ? translations : value;
  }

  tableRollText(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index].text = translations[index];
    });

    return value;
  }
}

export default new Converters();
