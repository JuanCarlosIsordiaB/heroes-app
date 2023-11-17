import {  Routes, Route } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/NavBar';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* Registro, Olvide Contraseña, etc */}
        <Route path="login" element={<LoginPage />}/>

        <Route path="/*" element={<HeroesRoutes />}/>

      </Routes>
    </>
  )
}
