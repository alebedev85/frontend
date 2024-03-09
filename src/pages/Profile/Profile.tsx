import Stack from '@mui/joy/Stack';
import clsx from 'clsx';
import IconButton from '@mui/joy/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Preferences from './preferences';
import Info from './Info';
import Merch from './Merch';
import MainInfo from './MainInfo';

import styles from './Profile.module.scss';
import { useAppSelector } from '../../redux/store';
import { openProfileSelector } from '../../redux/slices/ambassadorsSlice';

export default function Profile() {
  const openProfile = useAppSelector(openProfileSelector);

  return (
    <div className={clsx(styles.profile, openProfile && styles.profile_opened)}>
      <div className={styles.container}>
        <IconButton
          className={styles.button}
          variant="solid"
          sx={{ backgroundColor: 'white' }}
        >
          <ArrowBackIosIcon sx={{ color: 'black' }} />
        </IconButton>
        <Stack display="flex" flexDirection="row" gap="8px">
          <MainInfo />
          <Preferences />
          <Info />
          <Merch />
        </Stack>
      </div>
    </div>
  );
}
