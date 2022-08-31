import '../../constants/constants';
import styles from './styles.module.scss';
import { API_IMG } from '../../constants/constants';

export const Movie = ({title, poster_path, overview}: {title:string; poster_path:string; overview:string}) => {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={API_IMG+poster_path}></img>
            <p className={styles.title}>{title}</p>
        </div>
    )
}