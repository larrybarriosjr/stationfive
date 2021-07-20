import Header from "components/Header"
import MenuSection from "components/MenuSection"
import styles from "./styles.module.scss"

function App() {
  return (
    <main className={styles.app}>
      <Header />
      <MenuSection />
    </main>
  )
}

export default App
