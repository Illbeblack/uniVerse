import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import Profile from './pages/Profile';
import Authors from './pages/Authors';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Draft from './pages/Draft';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="inspiration" element={<Inspiration />}></Route>
          <Route path="draft" element={<Draft />}></Route>
          <Route path="authors" element={<Authors />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
