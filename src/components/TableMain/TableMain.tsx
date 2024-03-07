import clsx from 'clsx';
import Table from '@mui/joy/Table';
import TableButtons from './TableButtons/TableButtons';
import styles from './TableMain.module.scss';
import { TableData } from './types';

type PropsType = {
  data: TableData;
};

export default function TableMain({ data }: PropsType) {
  return (
    <div className={styles.table}>
      <Table
        borderAxis="both"
        className={styles.table__text}
        sx={{
          '--Table-headerUnderlineThickness': '3px',
          '--TableCell-height': '44px',
        }}
      >
        <thead>
          <tr>
            <th style={{ width: '16px' }}>№</th>
            <th>
              <div className={styles.table__cell}>
                ФИО <TableButtons />
              </div>
            </th>
            <th>Телеграмм</th>
            <th>Промокод</th>
            <th>Город</th>
            <th style={{ width: '44px' }}>Курс</th>
            <th>
              <div className={styles.table__cell}>
                Дата регистр <TableButtons />
              </div>
            </th>
            <th>
              <div className={styles.table__cell}>
                Статус <TableButtons />
              </div>
            </th>
            <th>Гайд 1</th>
            <th>Гайд 2</th>
            <th>Онбординг</th>
            <th>Профиль</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <a className={styles.table__link} href="#text-ellipsis">
                  {row.telegramm}
                </a>
              </td>
              <td>{row.promo}</td>
              <td>{row.city}</td>
              <td>{row.course}</td>
              <td>{row.register}</td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.status === 'Активный' && styles.wrapper_positive,
                    row.status === 'Выбыл' && styles.wrapper_negative,
                    row.status === 'Уточняется' && styles.wrapper_undefined
                  )}
                >
                  {row.status}
                </div>
              </td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.gaidOne === 'Да' && styles.wrapper_positive,
                    row.gaidOne === 'Нет' && styles.wrapper_negative
                  )}
                >
                  {row.gaidOne}
                </div>
              </td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.gaidTwo === 'Да' && styles.wrapper_positive,
                    row.gaidTwo === 'Нет' && styles.wrapper_negative
                  )}
                >
                  {row.gaidTwo}
                </div>
              </td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.onboarding === 'Прошёл' && styles.wrapper_positive,
                    row.onboarding === 'Не прошёл' && styles.wrapper_negative
                  )}
                >
                  {row.onboarding}
                </div>
              </td>
              <td>
                <a className={styles.table__link} href="#text-ellipsis">
                  {row.profile}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
