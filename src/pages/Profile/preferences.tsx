import Chip from '@mui/joy/Chip';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Profile.module.scss';

export default function Preferences() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Sheet className={styles.sheet}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography level="title-lg">Предпочтения</Typography>
        <IconButton onClick={() => setDisabled(false)}>
          <EditIcon fontSize="medium" />
        </IconButton>
      </Stack>
      <Typography marginTop="20px">Предпочтения</Typography>
      <Stack
        display="flex"
        flexDirection="row"
        gap="4px"
        flexWrap="wrap"
        marginTop="8px"
      >
        <Chip size="sm">Видео</Chip>
        <Chip size="sm">Картография</Chip>
        <Chip size="sm">Аудио</Chip>
        <Chip size="sm">Текст</Chip>
        <Chip size="sm">Криптоинвестиции</Chip>
      </Stack>
      <form className={styles.form}>
        <FormControl disabled={disabled}>
          <FormLabel>Ссылка на блог амбасадора</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
        <FormControl disabled={disabled}>
          <FormLabel>С какой целью пришел учиться</FormLabel>
          <Textarea minRows={2} />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
        <FormControl disabled={disabled}>
          <FormLabel>Заметки</FormLabel>
          <Textarea minRows={2} />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
      </form>
    </Sheet>
  );
}
