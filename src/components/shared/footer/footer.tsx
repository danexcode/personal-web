import styles from './footer.module.sass'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        Daniel Rodríguez @danexcode © 2024
      </section>
      <section>
        <ul>
          <li>Github</li>
          <li>Instagram</li>
          <li>danexcode.next@gmail.com</li>
        </ul>
      </section>
    </footer>
  )
}