import Switch from '@mui/joy/Switch';
import styles from './ControlesSwitch.module.scss';

type ControlesSwitchPropsType = {
  lebele: string;
};

export default function ControlesSwitch({ lebele }: ControlesSwitchPropsType) {
  return (
    <div className={styles.controlesSwitch}>
      <Switch color="primary" disabled={false} size="md" variant="solid" />
      <p className={styles.controlesSwitch__leble}>{lebele}</p>
    </div>
  );
}
