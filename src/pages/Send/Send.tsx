/* eslint-disable jsx-a11y/control-has-associated-label */
import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Checkbox,
} from '@mui/joy';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { test } from './testData';
import styles from './Send.module.scss';

export default function Send() {
  return (
    <Stack marginLeft="20px" marginRight="20px">
      <Stack
        marginBottom="36px"
        display="flex"
        flexDirection="row"
        width="1330px"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Stack display="flex" gap="16px" flexDirection="row">
          <FormControl sx={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Input
              placeholder="Введите запрос"
              sx={{ width: '479px' }}
              endDecorator={
                <IconButton>
                  <SearchIcon />
                </IconButton>
              }
            />
          </FormControl>

          <FormControl sx={{ width: '188px' }}>
            <FormLabel>Сортировка</FormLabel>
            <Select indicator={<KeyboardArrowDown />}>
              <Option value="all">Все</Option>
              <Option value="raw">Необработанные</Option>
              <Option value="formed">Сформированные</Option>
              <Option value="send">Передано логистам</Option>
            </Select>
          </FormControl>
        </Stack>
        <Button sx={{ height: '34px', display: 'flex' }}>
          Создать отправку
        </Button>
      </Stack>

      <div className={styles.table}>
        <Table
          stickyHeader
          stickyFooter
          variant="plain"
          borderAxis="both"
          className={styles.table__text}
          sx={{
            '--Table-headerUnderlineThickness': '3px',
            '--TableCell-height': '48px',

            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              top: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bottom: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th>Передано логистам</th>
              <th>
                <div className={styles.table__cell}>Куратор</div>
              </th>
              <th>Мерч</th>
              <th>ФИО</th>
              <th>Индекс</th>
              <th style={{ width: '44px' }}>Страна</th>
              <th>
                <div className={styles.table__cell}>Город</div>
              </th>
              <th>
                <div className={styles.table__cell}>Адрес</div>
              </th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody>
            {test.map((row) => (
              <tr key={row.id}>
                <td>
                  <Checkbox />
                </td>
                <td>{row.curator}</td>
                <td>{row.merch}</td>
                <td>{row.fio}</td>
                <td>{row.index}</td>
                <td>{row.country}</td>
                <td>{row.city}</td>
                <td>{row.address}</td>
                <td>{row.tel}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Stack>
  );
}
