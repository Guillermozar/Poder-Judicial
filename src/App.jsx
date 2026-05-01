import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header, Footer, PageLoader, AccessibilityPanel } from './components';

const Home = lazy(() => import('./pages/Home'));
const Institutional = lazy(() => import('./components/sections/Institutional'));
const Login = lazy(() => import('./pages/admin/Login'));
const NewsManager = lazy(() => import('./pages/admin/NewsManager'));
const AgendaPage = lazy(() => import('./pages/Agenda'));

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/comunicaciones');
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Tercera Circunscripción Judicial - Poder Judicial de Itapúa",
    "url": "https://itapua.pj.gov.py/",
    "logo": "https://itapua.pj.gov.py/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palacio de Justicia, Luis María Argaña y Jóvenes por la Democracia",
      "addressLocality": "Encarnación",
      "addressRegion": "Itapúa",
      "addressCountry": "PY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+595-71-219-2000",
      "contactType": "Atención Ciudadana"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Helmet>
        <title>Poder Judicial | Tercera Circunscripción de Itapúa</title>
        <meta name="description" content="Portal oficial de la Tercera Circunscripción Judicial de la República, sede Itapúa. Acceda a la agenda inteligente, mesa de entrada en línea y expediente judicial electrónico." />
        <meta property="og:title" content="Poder Judicial | Tercera Circunscripción de Itapúa" />
        <meta property="og:description" content="Portal institucional del Poder Judicial de Itapúa. Servicios ciudadanos, expediente electrónico y transparencia." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Poder Judicial | Tercera Circunscripción de Itapúa" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {!isAdminRoute && <Header />}
      <main className="flex-grow flex flex-col relative w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institutional />} />
            <Route path="/comunicaciones" element={<Login />} />
            <Route path="/comunicaciones/gestor" element={<NewsManager />} />
            <Route path="/calendario" element={<AgendaPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
      <AccessibilityPanel />
    </div>
  );
};

export default App;
