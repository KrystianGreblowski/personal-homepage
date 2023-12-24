export const demoHandler = (demoLink) => {
  window.open(demoLink, "_blank");
};

export const codeHandler = (event, codeLink) => {
  event.stopPropagation();

  window.open(codeLink, "_blank");
};
