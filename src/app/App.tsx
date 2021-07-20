import Header from "components/Header"
import MenuSection from "components/MenuSection"
import ResultModal from "components/ResultModal"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { resetMenu } from "states/menu"
import { toggleModalDisplay, toggleModalMounted } from "states/presentation"
import styles from "./styles.module.scss"

function App() {
  const dispatch = useAppDispatch()
  const modalDisplay = useAppSelector(state => state.presentationSlice.modalDisplay)
  const modalMounted = useAppSelector(state => state.presentationSlice.modalMounted)

  const handleCloseModal = () => {
    dispatch(toggleModalDisplay(false))
  }

  const handleUnmountModal = () => {
    dispatch(resetMenu())
    dispatch(toggleModalMounted(false))
  }

  return (
    <main className={styles.app}>
      <Header />
      <MenuSection />
      {modalMounted ? (
        <ResultModal open={modalDisplay} onClose={handleCloseModal} onTransitionEnd={handleUnmountModal} />
      ) : null}
    </main>
  )
}

export default App
