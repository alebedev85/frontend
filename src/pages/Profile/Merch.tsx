import clsx from 'clsx';
import Chip from '@mui/joy/Chip';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';
import styles from './Profile.module.scss';

export default function Merch() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Sheet className={styles.sheet}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography level="title-lg">Отправка мерча</Typography>
        <IconButton onClick={() => setDisabled(false)}>
          <EditIcon fontSize="medium" />
        </IconButton>
      </Stack>

      <form className={styles.form}>
        <FormControl
          disabled={disabled}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <FormLabel>Первый этап гайда пройден</FormLabel>

          <Checkbox />
        </FormControl>

        <FormControl disabled={disabled} sx={{ marginTop: '18px' }}>
          <FormLabel>Ссылка на платформе</FormLabel>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="8px"
            marginBottom="8px"
          >
            <Input placeholder="Placeholder" className={styles.sheet__input} />
            {/* <FormHelperText>This is a helper text.</FormHelperText> */}

            <Input placeholder="Placeholder" className={styles.sheet__input} />
            {/* <FormHelperText>This is a helper text.</FormHelperText> */}
          </Stack>
        </FormControl>

        <Button variant="outlined" sx={{ marginTop: '16px' }}>
          Отправить мерч
        </Button>

        <FormControl
          disabled={disabled}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '22px',
          }}
        >
          <FormLabel>Второй этап гайда пройден</FormLabel>

          <Checkbox />
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel sx={{ marginTop: '18px' }}>Ссылка на платформе</FormLabel>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="8px"
            marginBottom="8px"
          >
            <Input placeholder="Placeholder" className={styles.sheet__input} />
          </Stack>
        </FormControl>

        <Button variant="outlined" sx={{ marginTop: '16px' }}>
          Отправить мерч
        </Button>
        <Button variant="solid" sx={{ marginTop: '12px' }}>
          Отправить мерч
        </Button>
      </form>
    </Sheet>
  );
}
