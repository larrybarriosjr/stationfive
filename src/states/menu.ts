import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from "api/data.json"
import { MenuInitialState, SelectedItem } from "types/menu"

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
    },
    setSelectedItem: (state, action: PayloadAction<SelectedItem>) => {
      if (!state.selectedItems[action.payload.group]) {
        state.selectedItems.push(action.payload.value)
      } else {
        state.selectedItems[action.payload.group] = action.payload.value
      }
    }
  }
})

const { actions, reducer } = menuSlice

export const { setStep, setSelectedItem } = actions
export const { name: menuName } = menuSlice
export default reducer
