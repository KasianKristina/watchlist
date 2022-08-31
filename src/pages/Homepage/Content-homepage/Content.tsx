import styles from './styles.module.scss'
import classnames from 'classnames'
import { PostersApi } from '../../../services/PostersApi'

export const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>Welcome to <span className={styles.watchlists}>Watchlists</span></h1>
                <p className={styles.text}>Browse movies, add them to watchlists and share them with friends.</p>
                <span className={classnames(styles.text, styles.vector)}>Just click the</span> 
                <span className={classnames(styles.text, styles.check)}>to add a movie, the poster to see more details or</span> 
                <span className={styles.text}>to mark the movie as watched.</span>
            </div>
            <div className={styles.input_box}>
                <input className={styles.input} placeholder='Search for movies by title' type='search'></input>
                <button className={styles.input_btn}>search</button>
            </div>
            <div className={styles.content}>
                <p className={styles.content_text}>Popular movies right now</p>
                <div className={styles.content_posters}>
                    <PostersApi />
                </div>
            </div>
        </div>
    )
}