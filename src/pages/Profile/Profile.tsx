import Stack from '@mui/joy/Stack';
import Preferences from './preferences';
import Info from './Info';
import Merch from './Merch';
import MainInfo from './MainInfo';

export default function Profile() {
  return (
    <Stack display="flex" flexDirection="row" gap="8px">
      <MainInfo />
      <Preferences />
      <Info />
      <Merch />
    </Stack>
  );
}
