const localStorageKey = "darkThemeState";

export const saveDarkThemeStateInLocalStorage = (darkThemeState) =>
  localStorage.setItem(localStorageKey, JSON.stringify(darkThemeState));

export const getDarkThemeStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
