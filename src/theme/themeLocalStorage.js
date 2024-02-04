const darkThemeStateKey = "darkThemeState";

export const saveDarkThemeStateInLocalStorage = (darkThemeState) =>
  localStorage.setItem(darkThemeStateKey, JSON.stringify(darkThemeState));

export const getDarkThemeStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(darkThemeStateKey)) || false;
