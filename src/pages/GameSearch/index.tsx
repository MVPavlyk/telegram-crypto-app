import { PageLayout } from '../../modules/common/components/layout/page-layout.tsx';
import GameSearch from '../../modules/gameSearch/gameSearch.tsx';

const GameSearchPage = () => {
  return (
    <PageLayout showNavigation={false}>
      <GameSearch />
    </PageLayout>
  );
};

export default GameSearchPage;
