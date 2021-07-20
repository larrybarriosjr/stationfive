import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from "api/data.json"
import { MenuInitialState } from "types/menu"

const initialState: MenuInitialState = {
  menuItems: data.menus,
  selectedItems: [],
  step: 0
}

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      if (state.step < action.payload) {
        state.step = action.payload
      }
    }
  }
})

const { actions, reducer } = menuSlice

export const { setStep } = actions
export const { name: menuName } = menuSlice
export default reducer
