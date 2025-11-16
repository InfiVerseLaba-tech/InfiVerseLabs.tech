
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkflowPage from './pages/WorkflowPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/cloud-devops" element={<ServiceDetailPage service={SERVICES.cloudDevops} />} />
          <Route path="/services/ai-ml" element={<ServiceDetailPage service={SERVICES.aiMl} />} />
          <Route path="/services/web-app-dev" element={<ServiceDetailPage service={SERVICES.webAppDev} />} />
          <Route path="/services/data-analytics" element={<ServiceDetailPage service={SERVICES.dataAnalytics} />} />
          <Route path="/services/security" element={<ServiceDetailPage service={SERVICES.security} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/workflow" element={<WorkflowPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
