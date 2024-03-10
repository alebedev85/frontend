import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import IconButton from '@mui/joy/IconButton';
import { Stack, Typography } from '@mui/joy';
import AV from '../../assets/AV.png';
import SearchIcon from '../../assets/SearchIcon.svg';
import BadgeIcon from '../../assets/Badge_ball.svg';
import PopupHeader from '../PopupHeader/PopupHeader';
import { logOut } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/store';
import { BEARER_KEY } from '../../utils/const';
import styles from './Header.module.scss';

export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickLogOut = () => {
    dispatch(logOut);
    localStorage.removeItem(BEARER_KEY);
    navigate('/login', { replace: true });
  };

  const location = useLocation();

  function getHeadingByLocation(locationName: string) {
    if (locationName === '/budget') {
      return 'Бюджет';
    }
    if (locationName === '/send') {
      return 'Отправка мерча';
    }
    return null;
  }

  /* console.log(location.pathname); */

  return (
    <Stack flexDirection="row" alignItems="center" marginLeft="20px">
      <Typography level="h1">
        {getHeadingByLocation(location.pathname)}
      </Typography>
      <div className={styles.header}>
        <IconButton>
          <img
            className={styles.header__SearchIcon}
            src={SearchIcon}
            alt="Badge_icon"
          />
        </IconButton>
        <div className={styles.header__badge}>
          <Badge color="danger" size="sm" badgeContent={4}>
            <img
              className={styles.header__badgeIcon}
              src={BadgeIcon}
              alt="Badge_icon"
            />
          </Badge>
        </div>

        <div className={styles.header__avatar}>
          <Avatar
            onClick={() => {
              setOpenPopup(true);
            }}
            variant="soft"
            src={AV}
          />
        </div>
        <PopupHeader
          isOpen={openPopup}
          onClose={() => setOpenPopup(false)}
          onButton={() => onClickLogOut()}
          avatar={AV}
        />
      </div>
    </Stack>
  );
}
