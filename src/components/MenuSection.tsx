import { useAppDispatch, useAppSelector } from "hooks/redux"
import { setStep } from "states/menu"
import { MenuItemGroup } from "types/menu"
import RadioGroup from "./RadioGroup"
import styles from "./styles.module.scss"

const MenuSection = () => {
  const dispatch = useAppDispatch()

  const step = useAppSelector(state => state.menuSlice.step)
  const menuItems = useAppSelector(state => state.menuSlice.menuItems)

  const menuLabel = (group: MenuItemGroup) => {
    switch (group) {
      case menuItems[0]:
        return "Type of Diet"
      case menuItems[1]:
        return "Choose a Main Dish"
      case menuItems[2]:
        return "Choose a Side Dish"
      default:
        return "Please choose"
    }
  }

  const menuName = (group: MenuItemGroup) => {
    switch (group) {
      case menuItems[0]:
        return "diet"
      case menuItems[1]:
        return "main"
      case menuItems[2]:
        return "side"
      default:
        return ""
    }
  }

  if (!menuItems.length) return null

  return (
    <form className={styles.menu}>
      {menuItems.map((group, idx) => (
        <RadioGroup
          key={idx}
          index={idx}
          label={menuLabel(group)}
          items={group}
          name={menuName(group)}
          disabled={idx > step}
          onChange={() => dispatch(setStep(idx + 1))}
        />
      ))}
      <button type="submit" disabled={step !== 3} className={styles.menu__submit}>
        Submit
      </button>
    </form>
  )
}

export default MenuSection
