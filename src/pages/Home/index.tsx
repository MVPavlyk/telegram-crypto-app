import { PageLayout } from '../../modules/common/components/layout/page-layout.tsx';
import { Home } from '../../modules/home/home.tsx';
import { useAppStore } from '../../modules/common/store';

export const HomePage = () => {
  const { isLoading } = useAppStore();

  return (
    <PageLayout showNavigation={!isLoading}>
      <Home />
    </PageLayout>
  );
};
