import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AuthPage from './pages/AuthPage/AuthPage';
import './index.css';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
