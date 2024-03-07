import { IconButton, Button, Avatar } from '@mui/joy';
import Exit from '../../assets/Exit.svg';
import styles from './PopupHeader.module.scss';

export default function PopupHeader({ avatar }: { avatar: string }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__close}>
        <IconButton size="lg">
          <img src={Exit} alt="Close button" />
        </IconButton>
      </div>
      <Avatar src={avatar} size="lg" />
      <Button size="lg">Выход</Button>
    </div>
  );
}
