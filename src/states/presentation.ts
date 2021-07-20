import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PresentationInitialState } from "types/presentation"

const initialState: PresentationInitialState = {
  modalDisplay: false,
  modalMounted: false
}

const presentationSlice = createSlice({
  name: "presentationSlice",
  initialState,
  reducers: {
    toggleModalDisplay: (state, action: PayloadAction<boolean>) => {
      state.modalDisplay = action.payload
    },
    toggleModalMounted: (state, action: PayloadAction<boolean>) => {
      state.modalMounted = action.payload
    }
  }
})

const { actions, reducer } = presentationSlice

export const { toggleModalDisplay, toggleModalMounted } = actions
export const { name: presentationName } = presentationSlice
export default reducer
