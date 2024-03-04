import { Autocomplete } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import TrashIcon from '../../assets/TrashIcon.svg';
import styles from './ControlesInput.module.scss';

type ControlesInputPropsType = {
  title: string;
  options: { label: string; id: number }[];
};

export default function ControlesInput({
  title,
  options,
}: ControlesInputPropsType) {
  return (
    <div className={styles.constrolesInput}>
      <p className={styles.constrolesInput__leble}>{title}</p>
      <div className={styles.constrolesInput__input}>
        <Autocomplete
          multiple
          placeholder="Фильтрация"
          limitTags={2}
          options={options}
          getOptionLabel={(option) => option.label}
          sx={{
            width: '313px',
            height: '64px',
          }}
        />
        <IconButton>
          <img
            className={styles.header__SearchIcon}
            src={TrashIcon}
            alt="Badge_icon"
          />
        </IconButton>
      </div>
    </div>
  );
}
