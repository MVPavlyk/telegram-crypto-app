import { PageLayout } from '../../modules/common/components/layout/page-layout.tsx';
import { Leaderboard } from '../../modules/leaderboard/leaderboard.tsx';

export const LeaderboardPage = () => {
  return (
    <PageLayout showNavigation={true}>
      <Leaderboard />
    </PageLayout>
  );
};
