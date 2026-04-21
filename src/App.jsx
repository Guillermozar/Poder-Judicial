import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, PageLoader, AccessibilityPanel } from './components';

const Home = lazy(() => import('./pages/Home'));
const Institutional = lazy(() => import('./components/sections/Institutional'));

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col relative w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institutional />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <AccessibilityPanel />
    </div>
  );
};

export default App;
