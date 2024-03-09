import clsx from 'clsx';
import Table from '@mui/joy/Table';
import TableButtons from './TableButtons/TableButtons';
import styles from './TableMain.module.scss';
import { useAppSelector } from '../../redux/store';
import { ambassadorsListSelector } from '../../redux/slices/ambassadorsSlice';

export default function TableMain() {
  const data = useAppSelector(ambassadorsListSelector);
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
              <td>{row.fio}</td>
              <td>
                <a className={styles.table__link} href="#text-ellipsis">
                  {row.telegram}
                </a>
              </td>
              <td>{row.promo}</td>
              <td>{row.city}</td>
              <td>{row.course}</td>
              <td>{row.registrationDate}</td>
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
                    row.guideOneInfo === 'Да' && styles.wrapper_positive,
                    row.guideOneInfo === 'Нет' && styles.wrapper_negative
                  )}
                >
                  {row.guideOneInfo}
                </div>
              </td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.guideTwoInfo === 'Да' && styles.wrapper_positive,
                    row.guideTwoInfo === 'Нет' && styles.wrapper_negative
                  )}
                >
                  {row.guideTwoInfo}
                </div>
              </td>
              <td>
                <div
                  className={clsx(
                    styles.wrapper,
                    row.onboardingInfo === 'Прошёл' && styles.wrapper_positive,
                    row.onboardingInfo === 'Не прошёл' &&
                      styles.wrapper_negative
                  )}
                >
                  {row.onboardingInfo}
                </div>
              </td>
              <td>
                <button className={styles.table__profile}>Профаил</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
