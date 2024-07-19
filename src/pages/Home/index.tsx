import { PageLayout } from '../../modules/common/components/layout/page-layout.tsx';
import { Home } from '../../modules/home/home.tsx';

export const HomePage = () => {
  return (
    <PageLayout showNavigation={true}>
      <Home />
    </PageLayout>
  );
};
