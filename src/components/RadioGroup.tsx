import clsx from "clsx"
import { MenuItemGroup } from "types/menu"
import RadioInput from "./RadioInput"
import styles from "./styles.module.scss"

type RadioGroupProps = {
  label: string
  items: MenuItemGroup
  name: string
  disabled?: boolean
  onChange?: () => void
}

const RadioGroup = ({ label, items, name, disabled, onChange }: RadioGroupProps) => {
  const fieldSetClasses = clsx([styles.radio_group, { [styles.radio_group__disabled]: disabled }])
  const labelClasses = clsx([styles.radio_group__label, { [styles.radio_group__disabled]: disabled }])

  if (!items.length) return null

  return (
    <fieldset className={fieldSetClasses} disabled={disabled} onChange={onChange}>
      <legend className={labelClasses}>{label}</legend>
      <div className={styles.radio_group__items}>
        {items.map(item => (
          <RadioInput key={item.id} id={item.id} name={name} label={item.value} disabled={disabled} />
        ))}
      </div>
    </fieldset>
  )
}

export default RadioGroup
