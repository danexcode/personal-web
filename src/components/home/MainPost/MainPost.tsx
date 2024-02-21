import { GoalManager } from "../GoalManager"
import { Post } from "../post"
import styles from './MainPost.module.sass'

export const MainPost = () => {
  let posts = [
    {
      id: 1,
      title: 'El principito',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo magni reiciendis recusandae praesentium ipsum sed delectus nemo esse laudantium! Architecto nisi atque laborum doloribus quisquam sint vero, veritatis at?',
      image: 'image.com',
      content: 'texto largo',
      date: 'date',
      readingTime: 5,
    },
    {
      id: 2,
      title: 'Padre Rico Padre Pobre',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo magni reiciendis recusandae praesentium ipsum sed delectus nemo esse laudantium! Architecto nisi atque laborum doloribus quisquam sint vero, veritatis at?',
      image: 'image.com',
      content: 'texto largo',
      date: 'date',
      readingTime: 5,
    },
    {
      id: 1,
      title: 'Las sirenita',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo magni reiciendis recusandae praesentium ipsum sed delectus nemo esse laudantium! Architecto nisi atque laborum doloribus quisquam sint vero, veritatis at?',
      image: 'image.com',
      content: 'texto largo',
      date: 'date',
      readingTime: 5,
    }
  ]
  return (
    <main className={styles.main}>
      <GoalManager />
      <h2>Ultimas Publicaciones</h2>
      {
        posts.map((post: Post) => (
          <Post key={post.id} post={post}/>
        ))
      }
    </main>
  )
}