import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
