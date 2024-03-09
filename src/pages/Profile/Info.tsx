import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import styles from './Profile.module.scss';

export default function Info() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Sheet className={styles.sheet}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography level="title-lg">Информация</Typography>
        <IconButton onClick={() => setDisabled(false)}>
          <EditIcon fontSize="medium" />
        </IconButton>
      </Stack>

      <form className={styles.form}>
        <FormControl disabled={disabled}>
          <FormLabel>Индекс</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel>Город</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel>Улица</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel>Дом.Квартира</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="8px"
          marginBottom="8px"
        >
          <FormControl disabled={disabled}>
            <FormLabel>Размер обуви</FormLabel>
            <Select indicator={<KeyboardArrowDown />}>
              <Option value="37">37</Option>
              <Option value="38">38</Option>
              <Option value="39">39</Option>
              <Option value="40">40</Option>
            </Select>
          </FormControl>

          <FormControl disabled={disabled}>
            <FormLabel>Размер одежды</FormLabel>
            <Select indicator={<KeyboardArrowDown />}>
              <Option value="xs">XS</Option>
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
            </Select>
          </FormControl>
        </Stack>

        <FormControl disabled={disabled}>
          <FormLabel>Отправлен мерч, гайд 1</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>

        <FormControl disabled={disabled}>
          <FormLabel>Отправлен мерч, гайд 2</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
      </form>
    </Sheet>
  );
}
