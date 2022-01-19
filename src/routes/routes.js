import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import FullPageLoader from '../components/loader/PageLoader';
import Books from '../pages/Books/Books';
import Categories from '../pages/Categories/Categories';

const AppRoutes = () => (
  <Suspense fallback={<FullPageLoader />}>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
