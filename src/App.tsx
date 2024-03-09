import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AuthPage from './pages/AuthPage/AuthPage';
import './index.css';
import Send from './pages/Send/Send';
import Budget from './pages/Budget/Budget';
import Analytics from './pages/Analytics/Analytics';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/send" element={<Send />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Profile />
    </div>
  );
}

export default App;
