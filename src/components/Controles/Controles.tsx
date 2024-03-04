import ControlesInput from '../ControlesInput/ControlesInput';
import ControlesSwitch from '../ControlesSwitch/ControlesSwitch';
import styles from './Controles.module.scss';

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
      <div className={styles.constroles__switch}>
        <ControlesSwitch lebele="Гайд 2 да/нет" />
        <ControlesSwitch lebele="Гайд 1 да/нет" />
      </div>
    </div>
  );
}
