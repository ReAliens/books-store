import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import FullPageLoader from '../components/loader/PageLoader';
import Books from '../redux/Books/Books';
import Categories from '../redux/Categories/Categories';

const AppRoutes = () => (
  <Suspense fallback={<FullPageLoader />}>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
