// localized string utils
import Dico from "./Dico";
import { ArrayUtils, ObjectUtils } from "../../app-core";

// object utils
const { find, isArray } = ArrayUtils;
const { isObject } = ObjectUtils;

// check if key exist
const isKeyExist = key => (Dico.KEYS && key ? key in Dico.KEYS : false);

// get localized string by key and language
const localizedString = (key, language) => {
  if (isKeyExist(key) && isObject(language)) {
    const localizedValues = Dico.DATA[language.key];
    let localizedValue = null;
    if (isArray(localizedValues)) {
      localizedValue = find(localizedValues, { key });
    }
    if (isObject(localizedValue)) {
      return localizedValue.value;
    }
  }
  return key;
};

// dico utils
const LocalizedStringUtils = {
  localizedString
};

export default LocalizedStringUtils;
