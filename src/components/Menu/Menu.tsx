import styles from './styles.module.css'

export const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <span className={styles.logo}>Watchlists</span>
                <input className={styles.input} placeholder='Search'></input>
                <button className={styles.btn_home}>Home</button>
                <button className={styles.btn_history}>History</button>
                <button className={styles.btn_create}>+ Create watchlist</button>
                <div className={styles.line}></div>
                <button className={styles.btn_list}>My Lists</button>
            </div>
            <button className={styles.guest}>GUEST</button>
        </div>
    )
}