import Image from 'next/image';

import styles from './header.module.sass'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <ul>
          <li>Danexcode</li>
          <li>Biografía</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>Login</li>
        </ul>
      </section>
    </header>
  )
}