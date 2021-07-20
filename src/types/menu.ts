export type MenuItem = {
  id: string
  value: string
}

export type MenuItemGroup = MenuItem[]

export type MenuInitialState = {
  menuItems: MenuItemGroup[]
  selectedItems: string[]
  step: number
}
