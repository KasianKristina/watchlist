import styles from './styles.module.scss';
import { Movie } from '../Movie/Movie';
import { MovieItem } from '../../services/movie.model';

export const ContentFilms = ({result} : {result: MovieItem[]}) => {
    return (
        <div className={styles.container}>
        <div className={styles.grid}>
          {result.map((value) => 
            <Movie key={value.id} {...value} />)}
        </div>
      </div>
    )
}