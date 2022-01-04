const waitLang = (lang, arrRu, arrEn) => {
  if (lang === "ru") {
    return arrRu;
  } else {
    return arrEn;
  }
};

export { waitLang };
