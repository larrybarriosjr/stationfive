import { useAppSelector } from "hooks/redux"
import { MenuItemGroup } from "types/menu"
import RadioGroup from "./RadioGroup"
import styles from "./styles.module.scss"

const MenuSection = () => {
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
    <section className={styles.menu}>
      {menuItems.map((group, idx) => (
        <RadioGroup key={idx} label={menuLabel(group)} items={group} name={menuName(group)} />
      ))}
    </section>
  )
}

export default MenuSection
