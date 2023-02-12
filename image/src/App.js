import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("logged")) {
      return <Navigate to="/login" />;
    }
    return children
  };


  return (
  <div>
<BrowserRouter>
<Routes>
    <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
