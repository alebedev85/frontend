import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
