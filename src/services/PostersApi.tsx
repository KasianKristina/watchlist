import { useEffect, useState } from 'react';
import styles from '../ui/Movie/styles.module.scss';
import { Movie } from '../ui/Movie/Movie';
import  { MovieItem } from './movie.model';
import { DISCOVER, API_KEY} from '../constants/constants'

const url = DISCOVER+"?api_key="+API_KEY;
  
export const PostersApi = () => {
    const [result, setResult] = useState<MovieItem[]>([]);
    
    useEffect(() => {
      const api = async () => {
        const data = await fetch(url, {
          method: "GET"
        });
        const jsonData = await data.json();
        setResult(jsonData.results);
      };
  
      api();
    }, []);

    return (
      <div className={styles.main_container}>
        <div className={styles.grid}>
          {result.map((value) => 
            <Movie key={value.id} {...value} />)}
        </div>
      </div>
    );
}