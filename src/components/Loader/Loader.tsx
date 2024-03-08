import { CircularProgress } from '@mui/joy';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress size="lg" />
    </div>
  );
}
