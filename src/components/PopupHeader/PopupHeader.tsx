import { IconButton, Button, Avatar } from '@mui/joy';
import { clsx } from 'clsx';
import Exit from '../../assets/Exit.svg';
import styles from './PopupHeader.module.scss';

type PopupHeaderPropsType = {
  avatar: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupHeader({
  avatar,
  isOpen,
  onClose,
}: PopupHeaderPropsType) {
  return (
    <div className={clsx(styles.popup, isOpen && styles.popup_open)}>
      <div className={styles.popup__close}>
        <IconButton size="lg" onClick={onClose}>
          <img src={Exit} alt="Close button" />
        </IconButton>
      </div>
      <Avatar src={avatar} size="lg" />
      <Button size="lg">Выход</Button>
    </div>
  );
}
