import clsx from "clsx"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { setSelectedItem } from "states/menu"
import { MenuItemGroup } from "types/menu"
import RadioInput from "./RadioInput"
import styles from "./styles.module.scss"

type RadioGroupProps = {
  index: number
  label: string
  items: MenuItemGroup
  name: string
  disabled?: boolean
  onChange?: () => void
}

const RadioGroup = ({ index, label, items, name, disabled, onChange }: RadioGroupProps) => {
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector(state => state.menuSlice.selectedItems)
  const disabledItems = useAppSelector(state => state.menuSlice.disabledItems)

  const fieldSetClasses = clsx([styles.radio_group, { [styles.radio_group__disabled]: disabled }])
  const labelClasses = clsx([styles.radio_group__label, { [styles.radio_group__disabled]: disabled }])

  const itemSelected = (id: string) => {
    return Boolean(selectedItems.find(item => item.toString() === id))
  }

  const itemDisabled = (id: string) => {
    return Boolean(disabledItems.find(item => item.toString() === id))
  }

  const handleSelectItem = (index: number, id: string) => {
    return () => dispatch(setSelectedItem({ group: index, value: id }))
  }

  if (!items.length) return null

  return (
    <fieldset className={fieldSetClasses} disabled={disabled} onChange={onChange}>
      <legend className={labelClasses}>{label}</legend>
      <div className={styles.radio_group__items}>
        {items.map(item => (
          <RadioInput
            key={item.id}
            id={item.id}
            name={name}
            label={item.value}
            value={item.id}
            disabled={disabled || itemDisabled(item.id)}
            checked={itemSelected(item.id)}
            onChange={handleSelectItem(index, item.id)}
          />
        ))}
      </div>
    </fieldset>
  )
}

export default RadioGroup
