export type MenuItem = {
  id: string
  value: string
}

export type RuleItems = {
  [key: string]: number[]
}

export type SelectedItem = {
  group: number
  value: string
}

export type MenuItemGroup = MenuItem[]

export type MenuInitialState = {
  menuItems: MenuItemGroup[]
  ruleItems: RuleItems
  selectedItems: string[]
  disabledItems: number[]
  step: number
}
