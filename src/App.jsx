import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, PageLoader, AccessibilityPanel } from './components';

const Home = lazy(() => import('./pages/Home'));
const Institutional = lazy(() => import('./components/sections/Institutional'));
const Login = lazy(() => import('./pages/admin/Login'));
const NewsManager = lazy(() => import('./pages/admin/NewsManager'));

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/comunicaciones');
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {!isAdminRoute && <Header />}
      <main className="flex-grow flex flex-col relative w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institutional />} />
            <Route path="/comunicaciones" element={<Login />} />
            <Route path="/comunicaciones/gestor" element={<NewsManager />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
      <AccessibilityPanel />
    </div>
  );
};

export default App;
