const waitLang = (lang, arrRu, arrEn) => {
  if (lang === "ua") {
    return arrRu;
  } else {
    return arrEn;
  }
};

export { waitLang };
