import styles from './styles.module.scss';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <span className={styles.logo}>Watchlists</span>
                <div className={styles.input_box}><input className={styles.input} placeholder='Search' type='search'></input></div>
                <button className={styles.btn_home}>Home</button>
                <button className={styles.btn_history}>History</button>
                <button className={styles.btn_create}>+ Create watchlist</button>
                <div className={styles.line}></div>
                <span className={styles.list}>My Lists</span>
            </div>
            <button className={styles.guest}>GUEST</button>
        </div>
    )
}