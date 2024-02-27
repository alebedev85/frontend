import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
