import clsx from "clsx"
import { useAppSelector } from "hooks/redux"
import { createPortal } from "react-dom"
import Button from "./Button"
import styles from "./styles.module.scss"

type ResultModalProps = React.ComponentPropsWithoutRef<"dialog"> & {
  onClose?: () => void
}

const ResultModal = ({ open, onClose, ...props }: ResultModalProps) => {
  const menuItems = useAppSelector(state => state.menuSlice.menuItems)
  const selectedItems = useAppSelector(state => state.menuSlice.selectedItems)
  const classes = clsx([styles.modal__element, { [styles.open]: open }])

  const itemGroup = (idx: number) => {
    switch (idx) {
      case 0:
        return "DIET TYPE:"
      case 1:
        return "MAIN DISH:"
      case 2:
        return "SIDE DISH:"
      default:
        break
    }
  }

  const itemValue = (item: string) => {
    return menuItems.flat().find(menu => menu.id === item)?.value
  }

  return createPortal(
    <div className={styles.modal__container}>
      <dialog open={true} className={classes} {...props}>
        {selectedItems.map((item, idx) => (
          <div key={idx} className={styles.modal__item}>
            <p className={styles.modal__item_label}>{itemGroup(idx)}</p>
            <p>{itemValue(item)}</p>
          </div>
        ))}
        <Button onClick={onClose} className={styles.modal__close}>
          Close
        </Button>
      </dialog>
    </div>,
    document.body
  )
}

export default ResultModal
