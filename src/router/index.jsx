import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { H1 } from '../components/Typography';
import { PATHS } from './paths';
import HomePage from './../pages/HomePage';
import StoresPage from '../pages/StoresPage';
import StorePage from '../pages/StorePage';
import EditStorePage from '../pages/EditStorePage';
import CreateStorePage from '../pages/CreateStorePage';

const Router = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path={PATHS.STORES.ROOT} element={<Outlet />}>
        <Route index element={<StoresPage />} />
        <Route path={PATHS.STORES.VIEW} element={<StorePage />} />
        <Route path={PATHS.STORES.EDIT} element={<EditStorePage />} />
        <Route path={PATHS.STORES.CREATE} element={<CreateStorePage />} />
      </Route>
      <Route
        path={PATHS.ERRORS.NOT_FOUND}
        element={<H1>Page not found 404</H1>}
      />
      <Route
        path='*'
        element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
      />
    </Routes>
  );
};

export default Router;
