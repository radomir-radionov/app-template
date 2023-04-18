import pageRoutes from 'constants/pageRoutes';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Layout, LayoutHome } from 'screens';

function AppRouter() {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<Layout />}>
        <Route element={<LayoutHome />}>
          <Route path={pageRoutes.HOME} element={<Navigate to={pageRoutes.BOOKS_ALL} />} />
          <Route path={pageRoutes.BOOK_CATEGORY} element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
