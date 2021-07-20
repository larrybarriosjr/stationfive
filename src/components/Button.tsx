import clsx from "clsx"
import styles from "./styles.module.scss"

type ButtonProps = React.ComponentPropsWithoutRef<"button">

const Button = ({ children, className, ...props }: ButtonProps) => {
  const classes = clsx([styles.button, className])

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
