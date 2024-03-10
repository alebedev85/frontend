import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Select, Stack } from '@mui/joy';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { test } from './testData';
import styles from './Budget.module.scss';

export default function Budget() {
  return (
    <Stack marginLeft="20px" marginRight="20px">
      <Stack
        marginBottom="36px"
        display="flex"
        flexDirection="row"
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
            <FormLabel>Отчет за год</FormLabel>
            <Select indicator={<KeyboardArrowDown />}>
              <Option value="2024">2024</Option>
              <Option value="2023">2024</Option>
            </Select>
          </FormControl>
        </Stack>
        <Button sx={{ height: '34px', display: 'flex' }}>
          Выгрузить отчет
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
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: '246px',
                  position: 'sticky',
                  left: 0,
                  zIndex: 20,
                }}
              >
                ФИО
              </th>

              <th style={{ width: 100 }}>Январь</th>
              <th style={{ width: 100 }}>Февраль</th>
              <th style={{ width: 100 }}>Март</th>
              <th style={{ width: 100 }}>Апрель</th>
              <th style={{ width: 100 }}>Май</th>
              <th style={{ width: 100 }}>Июнь</th>
              <th style={{ width: 100 }}>Июль</th>
              <th style={{ width: 100 }}>Август</th>
              <th style={{ width: 100 }}>Сентябрь</th>
              <th style={{ width: 100 }}>Октябрь</th>
              <th style={{ width: 100 }}>Ноябрь</th>
              <th style={{ width: 100 }}>Декабрь</th>
              <th
                style={{
                  width: '126px',
                }}
              >
                Общее за год
              </th>
            </tr>
          </thead>
          <tbody>
            {test.map((row) => (
              <tr key={row.fio}>
                <td style={{ background: 'white' }}>{row.fio}</td>
                <td>{row.january}</td>
                <td>{row.february}</td>
                <td>{row.march}</td>
                <td>{row.april}</td>
                <td>{row.may}</td>
                <td>{row.june}</td>
                <td>{row.july}</td>
                <td>{row.august}</td>
                <td>{row.september}</td>
                <td>{row.october}</td>
                <td>{row.november}</td>
                <td>{row.december}</td>
                <td>
                  {row.january +
                    row.february +
                    row.march +
                    row.april +
                    row.may +
                    row.june +
                    row.july +
                    row.august +
                    row.september +
                    row.october +
                    row.november +
                    row.december}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                style={{
                  width: '246px',
                  position: 'sticky',
                  left: 0,
                  zIndex: 20,
                }}
              >
                Общая сумма
              </th>
              <td>1,319</td>
              <td>50.7</td>
              <td>201</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
              <td>22.5</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </Stack>
  );
}
