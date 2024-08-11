import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import { HomePage } from './pages/Home';
import { LeaderboardPage } from './pages/Leaderboard';
import { ProfilePage } from './pages/User';
import { WalletPage } from './pages/Wallet';
import BASE_ROUTE, { Routes } from './modules/common/constants';
import { Protected } from './modules/common/hoc/protected.hoc.tsx';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import App from './App.tsx';
import GameSearch from './pages/GameSearch';
import GamePage from './pages/Game';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const manifestUrl =
  'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

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
    path: BASE_ROUTE,
    element: <App />,
    children: [
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
      {
        path: Routes.GAME_SEARCH,
        element: <Protected component={<GameSearch />} />,
      },
      {
        path: Routes.GAME,
        element: <Protected component={<GamePage />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <RouterProvider router={router} />
    </PersistQueryClientProvider>
  </TonConnectUIProvider>
);
