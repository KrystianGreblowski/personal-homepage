import { takeEvery, select, call } from "redux-saga/effects";
import { isDarkTheme } from "./themeSlice";
import { saveDarkThemeStateInLocalStorage } from "./themeLocalStorage";

function* saveDartThemeStateInLocalStorageHandler() {
  const themeState = yield select(isDarkTheme);
  yield call(saveDarkThemeStateInLocalStorage, themeState);
}

export function* watchThemeStateChange() {
  yield takeEvery("*", saveDartThemeStateInLocalStorageHandler);
}
