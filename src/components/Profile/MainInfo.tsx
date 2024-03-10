import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Profile.module.scss';

export default function MainInfo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Sheet className={styles.sheet}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography level="title-lg">Основная информация</Typography>
        <IconButton onClick={() => setDisabled(false)}>
          <EditIcon fontSize="medium" />
        </IconButton>
      </Stack>
      <form className={styles.form}>
        <FormControl disabled={disabled}>
          <FormLabel>ФИО</FormLabel>
          <Input
            placeholder="Placeholder"
            sx={{
              padding: '10px 12px',
              minHeight: '28px',
              lineHeight: '8px',
              fontSize: '14px',
            }}
            size="sm"
          />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="8px"
          marginBottom="8px"
        >
          <FormControl className={styles.sheet__input} disabled={disabled}>
            <FormLabel>Страна</FormLabel>
            <Input placeholder="Placeholder" />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>

          <FormControl className={styles.sheet__input} disabled={disabled}>
            <FormLabel>Активность</FormLabel>
            <Input placeholder="Placeholder" />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>

          <FormControl className={styles.sheet__input} disabled={disabled}>
            <FormLabel>Промокод</FormLabel>
            <Input placeholder="Placeholder" />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>

          <FormControl className={styles.sheet__input} disabled={disabled}>
            <FormLabel>Курс</FormLabel>
            <Input placeholder="Placeholder" />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Stack>

        <FormControl disabled={disabled}>
          <FormLabel>Телеграмм</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
        <FormControl disabled={disabled}>
          <FormLabel>Электронная почта</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
        <FormControl disabled={disabled}>
          <FormLabel>Телефон</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
        <FormControl disabled={disabled}>
          <FormLabel>Образование</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel>Работа</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
      </form>
    </Sheet>
  );
}
