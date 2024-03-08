import clsx from 'clsx';

import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Profile.module.scss';
import Preferences from './preferences';
import Info from './Info';
import Merch from './Merch';
import MainInfo from './MainInfo';

export default function Profile() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Stack display="flex" flexDirection="row" gap="8px">
      <MainInfo />
      <Preferences />
      <Info />
      <Merch />
    </Stack>
  );
}
