import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from "api/data.json"
import { MenuInitialState, SelectedItem } from "types/menu"

const initialState: MenuInitialState = {
  menuItems: data.menus,
  ruleItems: data.rules,
  selectedItems: [],
  disabledItems: [],
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

      state.disabledItems = []
      state.selectedItems.forEach(item => {
        const rules = state.ruleItems[item]
        if (rules) {
          state.selectedItems = state.selectedItems.filter(item => !rules.includes(parseInt(item)))
          state.disabledItems.push(...rules)
        }
        if (state.selectedItems.length < 3) {
          state.step = 0
        }
      })
    },
    resetMenu: () => {
      return initialState
    }
  }
})

const { actions, reducer } = menuSlice

export const { setStep, setSelectedItem, resetMenu } = actions
export const { name: menuName } = menuSlice
export default reducer
