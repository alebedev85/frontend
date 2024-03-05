import Controles from '../../components/Controles/Controles';
import TableMain from '../../components/TableMain/TableMain';
import styles from './Main.module.scss';
import { data } from '../../components/TableMain/data';

export default function Main() {
  return (
    <div className={styles.main}>
      <Controles />
      <TableMain data={data} />
    </div>
  );
}
