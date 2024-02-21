import Image from 'next/image'
import styles from './hero.module.sass'
import logo from '../../../../public/icons/DRR.png'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Daniel Rodríguez</h1>
      <h2>Estudiante de Ingeniería, FullStack developer, Explorador autodidacta</h2>
    </section>
      
  )
}