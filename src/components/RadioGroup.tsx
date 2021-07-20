import clsx from "clsx"
import { useAppDispatch } from "hooks/redux"
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

  const fieldSetClasses = clsx([styles.radio_group, { [styles.radio_group__disabled]: disabled }])
  const labelClasses = clsx([styles.radio_group__label, { [styles.radio_group__disabled]: disabled }])

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
            disabled={disabled}
            onChange={() => dispatch(setSelectedItem({ group: index, value: item.id }))}
          />
        ))}
      </div>
    </fieldset>
  )
}

export default RadioGroup
