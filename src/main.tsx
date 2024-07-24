import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import { HomePage } from './pages/Home';
import { LeaderboardPage } from './pages/Leaderboard';
import { ProfilePage } from './pages/User';
import { WalletPage } from './pages/Wallet';
import { Routes } from './modules/common/constants';
import { Protected } from './modules/common/hoc/protected.hoc.tsx';
import { MutationCache, QueryClient } from '@tanstack/react-query';

WebApp.ready();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000,
      retry: 0,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    },
    mutations: {
      retry: 0,
    },
  },
  // configure global cache callbacks to show toast notifications
  mutationCache: new MutationCache({
    onSuccess: () => {},
    onError: () => {},
  }),
});

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Protected component={<HomePage />} />,
  },
  {
    path: Routes.LEADERBOARD,
    element: <Protected component={<LeaderboardPage />} />,
  },
  {
    path: Routes.PROFILE,
    element: <Protected component={<ProfilePage />} />,
  },
  {
    path: Routes.WALLET,
    element: <Protected component={<WalletPage />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
    <RouterProvider router={router} />
  </PersistQueryClientProvider>
);
