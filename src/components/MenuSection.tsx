import { useAppDispatch, useAppSelector } from "hooks/redux"
import { setStep } from "states/menu"
import { toggleModalDisplay, toggleModalMounted } from "states/presentation"
import { MenuItemGroup } from "types/menu"
import Button from "./Button"
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

  const handleSetStep = (idx: number) => {
    return () => dispatch(setStep(idx + 1))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(toggleModalMounted(true))
    dispatch(toggleModalDisplay(true))
  }

  if (!menuItems.length) return null

  return (
    <form className={styles.menu} onSubmit={handleSubmit}>
      {menuItems.map((group, idx) => (
        <RadioGroup
          key={idx}
          index={idx}
          label={menuLabel(group)}
          items={group}
          name={menuName(group)}
          disabled={idx > step}
          onChange={handleSetStep(idx)}
        />
      ))}
      <Button type="submit" disabled={step !== 3}>
        Submit
      </Button>
    </form>
  )
}

export default MenuSection
