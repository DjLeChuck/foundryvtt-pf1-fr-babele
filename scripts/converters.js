class Converters {
  usePf2eTokensBestiaries = false;

  actions(value, translations) {
    if (!value || !translations) {
      return value;
    }

    value.forEach((type, index) => {
      const data = translations[index];
      if (!data) {
        return value;
      }

      value[index].effectNotes = data.effectNotes;
      value[index].name = data.name;
      value[index].spellArea = data.spellArea;
      value[index].spellEffect = data.spellEffect;

      if (data?.duration && value[index].duration?.value) {
        value[index].duration.value = data.duration;
      }

      if (data?.range && value[index].range?.value) {
        value[index].range.value = data.range;
      }

      if (data?.save && value[index].save?.description) {
        value[index].save.description = data.save;
      }

      if (data?.target && value[index].target?.value) {
        value[index].target.value = data.target;
      }
    });

    return value;
  }

  arrayOfArray(value, translations) {
    if (!value || !translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index] = [translations[index]];
    });

    return value;
  }

  contextNotes(value, translations) {
    if (!value || !translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index].text = translations[index];
    });

    return value;
  }

  flagsDictionary(value, translations) {
    if (!value || !translations) {
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
    if (!value || !translations) {
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
    if (!value || !translations) {
      return value;
    }

    value.forEach((type, index) => {
      value[index].text = translations[index];
    });

    return value;
  }

  simpleArray(value, translations) {
    if (!value || !translations) {
      return value;
    }

    const splitTranslations = translations.split(';');

    value.forEach((type, index) => {
      value[index] = splitTranslations[index];
    });

    return value;
  }

  // credits to McGreger: https://gitlab.com/arkanamirium/foundryvtt-pf1e-de/-/blob/develop/scripts/converters.js
  translateSubSchool(subschool) {
    const subSchoolMap = new Map([
      ['calling', 'Appel'],
      ['charm', 'Charme'],
      ['compulsion', 'Coercition'],
      ['creation', 'Création'],
      ['figment', 'Chimère'],
      ['glamer', 'Hallucination'],
      ['haunted', 'Hanté'],
      ['healing', 'Guérison'],
      ['pattern', 'Mirage'],
      ['phantasm', 'Fantasme'],
      ['polymorph', 'Métamorphose'],
      ['scrying', 'Scrutation'],
      ['shadow', 'Ombre'],
      ['summoning', 'Convocation'],
      ['teleportation', 'Téléportation'],
    ]);

    subSchoolMap.forEach((translation, original) => {
      if (Array.isArray(subschool)) {
        subschool = subschool.map((s) => this.converter(s));
      } else {
        subschool = subschool.replace(original, translation);
      }
    });

    return subschool;
  }
}

export default new Converters();
