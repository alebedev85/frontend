import { useEffect } from 'react';
import Controles from '../../components/Controles/Controles';
import TableMain from '../../components/TableMain/TableMain';
import Loader from '../../components/Loader/Loader';
import styles from './Main.module.scss';
import { useAppDispatch } from '../../redux/store';
import {
  setAmbassadorsList,
  setAmbassadorInfo,
} from '../../redux/slices/ambassadorsSlice';
import { useGetAmbassadorsListQuery } from './api';
import { test } from '../../components/TableMain/data';

export default function Main() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetAmbassadorsListQuery();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setAmbassadorsList(data));
    } else {
      dispatch(setAmbassadorsList(test));
    }
  }, [isLoading]); // eslint-disable-line

  const handlerOpenProfile = (id: string) => {
    dispatch(setAmbassadorInfo(id));
  };

  return (
    <div className={styles.main}>
      <Controles />
      {isLoading ? <Loader /> : <TableMain onProfile={handlerOpenProfile} />}
    </div>
  );
}
