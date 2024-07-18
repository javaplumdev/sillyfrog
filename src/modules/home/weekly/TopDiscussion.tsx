import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import React from 'react';

const tags = [
  '🤖 #AIAdvancements',
  '🚀 #SpaceExploration',
  '🌱 #RenewableEnergy',
  '🌍 #GlobalPolitics',
  '🌿 #EnvironmentalIssues',
  '📈 #EconomicTrends',
  '🎬 #FilmIndustry',
  '🎵 #MusicTrends',
  '🎉 #CulturalEvents',
  '⚽ #FootballMatches',
  '🏅 #AthletePerformances',
  '📊 #SportsAnalytics',
  '🎯 #GoalSetting',
  '💼 #CareerAdvice',
  '🧘‍♂️ #HealthAndWellness',
  '🌈 #DiversityAndInclusion',
  '🧠 #MentalHealthAwareness',
  '📚 #EducationReform',
];

const TopDiscussion = (props: any) => {
  const { className, ...rest } = props;
  return (
    <div className={cn(className, 'pt-5 w-full')}>
      <h3 className="font-bold mb-3">Top Discussions</h3>
      <div className="flex flex-col space-y-3">
        {(tags || []).map((item, index) => {
          return <p key={`top-discussion-${index}`}>{item}</p>;
        })}
      </div>
      <div className="text-xs my-3">
        <Badge>see more...</Badge>
      </div>
    </div>
  );
};

export default TopDiscussion;
