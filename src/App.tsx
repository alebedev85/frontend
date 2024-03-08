import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AuthPage from './pages/AuthPage/AuthPage';
import './index.css';
import Send from './pages/Send/Send';
import Budget from './pages/Budget/Budget';
import Analytics from './pages/Analytics/Analytics';
import Main from './pages/Main/Main';
import { setUser } from './redux/slices/authSlice';
import { useAppDispatch } from './redux/store';
import { useGetCurrentUserQuery } from './pages/AuthPage/api';

function App() {
  const [app, setApp] = useState(false);
  const dispatch = useAppDispatch();

  const { data: currentUser, isLoading, isSuccess } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(currentUser));
    }
    setApp(true);
  }, [isLoading]); // eslint-disable-line

  return (
    <div className="page">
      {!app ? (
        <Loader />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Main />} />
              <Route path="/send" element={<Send />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
