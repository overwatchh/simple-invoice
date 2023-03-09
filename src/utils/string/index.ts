//normalize - remove accents/diacritics

export const removeDiacritics = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const removeLeadingZero = (str: string) => {
  return str.replace(/^0+(?!$)/g, "");
};
