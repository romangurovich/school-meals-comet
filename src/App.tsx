import { BeforeYouBegin } from '@src/pages/before-you-begin/before-you-begin.tsx';
import { DocumentYoullNeed } from '@src/pages/documents-youll-need/document-youll-need.tsx';
import { GettingReady } from '@src/pages/getting-ready/getting-ready.tsx';
import { Welcome } from '@src/pages/welcome/welcome.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Route, Routes } from 'react-router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { ProtectedRoute } from './components/protected-route/protected-route';
import { Dashboard } from './pages/dashboard/dashboard';
import Details from './pages/details/details';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';

const queryClient = new QueryClient();

export const App = (): React.ReactElement => (
  <QueryClientProvider client={queryClient}>
    <IntlProvider locale={'en'}>
      <div>
        <Header />
        <main id="mainSection" className="usa-section">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/before-you-begin" element={<BeforeYouBegin />} />
            <Route path="/getting-ready" element={<GettingReady />} />
            <Route
              path="/documents-youll-need"
              element={<DocumentYoullNeed />}
            />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/details/:id" element={<Details />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </IntlProvider>
  </QueryClientProvider>
);
