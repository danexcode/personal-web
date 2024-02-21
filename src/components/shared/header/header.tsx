import Image from 'next/image';

import logo from '../../../../public/icons/danexcode.png'
import styles from './header.module.sass'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <ul>
          <li>
            <Image 
              className={styles.img}
              alt='danexcode logo'
              src={logo}
            />
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>Biografía</li>
          <li>Portfolio</li>
          <li className={styles.login}>
            Login
          </li>
        </ul>
      </section>
    </header>
  )
}