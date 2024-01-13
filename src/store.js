import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./themeSlice";
import { watchThemeStateChange } from "./themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeMode: themeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watchThemeStateChange);

export default store;
