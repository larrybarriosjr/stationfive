import { createSlice } from "@reduxjs/toolkit"
import data from "api/data.json"
import { MenuInitialState } from "types/menu"

const initialState: MenuInitialState = {
  menuItems: data.menus,
  selectedItems: [],
  step: 1
}

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {}
})

const { reducer } = menuSlice

export const { name: menuName } = menuSlice
export default reducer
