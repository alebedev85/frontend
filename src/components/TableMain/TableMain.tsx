import * as React from 'react';
import Table from '@mui/joy/Table';
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
            <th style={{ width: '11px' }}>№</th>
            <th>ФИО</th>
            <th>Телеграмм</th>
            <th>Промокод</th>
            <th>Город</th>
            <th>Курс</th>
            <th>Дата регистр</th>
            <th>Статус</th>
            <th>Гайд 1</th>
            <th>Гайд 2</th>
            <th>Онбординг</th>
            <th>Профиль</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.name}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <a href="#text-ellipsis">{row.telegramm}</a>
              </td>
              <td>{row.promo}</td>
              <td>{row.city}</td>
              <td>{row.course}</td>
              <td>{row.register}</td>
              <td>{row.status}</td>
              <td>{row.gaidOne}</td>
              <td>{row.gaidTwo}</td>
              <td>{row.onboarding}</td>
              <td>
                <a href="#text-ellipsis">{row.profile}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
