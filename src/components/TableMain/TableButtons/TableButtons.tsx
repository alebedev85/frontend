import { IconButton } from '@mui/joy';
import arrowUp from '../../../assets/arrowUp.svg';
import arrowDown from '../../../assets/arrowDown.svg';
import styles from './TableButtons.module.scss';

export default function TableButtons() {
  return (
    <div className={styles.tableButtons}>
      <IconButton
        size="sm"
        sx={{
          'min-width': '0',
          'min-height': '0',
        }}
      >
        <img className={styles.tableButtons__img} src={arrowUp} alt="arrowUp" />
      </IconButton>
      <IconButton
        size="sm"
        sx={{
          'min-width': '0',
          'min-height': '0',
        }}
      >
        <img
          className={styles.tableButtons__img}
          src={arrowDown}
          alt="arrowDown"
        />
      </IconButton>
    </div>
  );
}
