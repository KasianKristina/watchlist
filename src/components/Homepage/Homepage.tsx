import styles from './styles.module.css'
import { Menu } from '../Menu/Menu'
import { Content } from './Content-homepage/Content'

export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}><Menu /></div>
            <div className={styles.content}><Content /></div>
        </div>
    )
}