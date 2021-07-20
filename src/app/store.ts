import { configureStore } from "@reduxjs/toolkit"
import menuReducer, { menuName } from "states/menu"

export const store = configureStore({
  reducer: {
    [menuName]: menuReducer
  }
})
