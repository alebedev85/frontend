import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import styles from './ProtectedRoute.module.scss';
import { useAppSelector } from '../../redux/store';
import { authSelector } from '../../redux/slices/authSlice';
import Profile from '../../pages/Profile/Profile';

export default function ProtectedRoute() {
  const { isAuth } = useAppSelector(authSelector);
  const location = useLocation();
  return isAuth ? (
    <div className={styles.container}>
      <Profile />
      <Navbar />
      <div className={styles.layout}>
        <Header />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
}
