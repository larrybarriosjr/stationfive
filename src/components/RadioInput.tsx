import clsx from "clsx"
import styles from "./styles.module.scss"

type RadioInputProps = React.ComponentPropsWithoutRef<"input"> & {
  id: string
  label: string
}

const RadioInput = ({ label, ...props }: RadioInputProps) => {
  const labelClasses = clsx([styles.radio_input__label, { [styles.radio_input__disabled]: props.disabled }])

  return (
    <div className={styles.radio_input__container}>
      <input className={styles.radio_input__input} type="radio" {...props} />
      <label className={labelClasses} htmlFor={props.id}>
        {label}
      </label>
    </div>
  )
}

export default RadioInput
