import arrowUp from '../../../assets/arrowUp.svg';
import arrowDown from '../../../assets/arrowDown.svg';
import styles from './TableButtons.module.scss';

export default function TableButtons() {
  return (
    <div className={styles.tableButtons}>
      <button className={styles.tableButtons__button}>
        <img className={styles.tableButtons__img} src={arrowUp} alt="arrowUp" />
      </button>
      <button className={styles.tableButtons__button}>
        <img
          className={styles.tableButtons__img}
          src={arrowDown}
          alt="arrowDown"
        />
      </button>
    </div>
  );
}
