import styles from './Controles.module.scss';
import ControlesInput from '../ControlesInput/ControlesInput';

export default function Controles() {
  return (
    <div className={styles.constroles}>
      <ControlesInput
        title="Статус Курс"
        options={[
          { label: 'По статусу', id: 1 },
          { label: 'По курсу', id: 2 },
        ]}
      />
      <ControlesInput
        title="Ондбординг"
        options={[
          { label: 'Прошёл', id: 1 },
          { label: 'Не прошёл', id: 2 },
        ]}
      />
    </div>
  );
}
