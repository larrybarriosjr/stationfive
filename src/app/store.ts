import { configureStore } from "@reduxjs/toolkit"
import menuReducer, { menuName } from "states/menu"
import presentationReducer, { presentationName } from "states/presentation"

export const store = configureStore({
  reducer: {
    [menuName]: menuReducer,
    [presentationName]: presentationReducer
  }
})
