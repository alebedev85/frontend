import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import './ProtectedRoute.scss';
// import { useAppSelector } from '@/redux/store';
// import { authSelector } from '@/redux/slices/authSlice';

export default function ProtectedRoute({ isLoading }: { isLoading: boolean }) {
  // const { isAuth } = useAppSelector(authSelector);
  const isAuth = true;
  const location = useLocation();
  return isAuth ? (
    <div className="container">
      <Header />
      <div className="layout">
        <Navbar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    !isLoading && <Navigate state={{ from: location }} to="/login" replace />
  );
}
