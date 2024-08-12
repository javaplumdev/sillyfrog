import BaseTopTagsSkeletons from '@/components/base/skeletons/BaseTopTagsSkeletons';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import TopDiscussion from './TopDiscussion';

import styles from './styles.module.scss';
import { cn } from '@/lib/utils';

const tags = [
  '#AIAdvancements',
  '#SpaceExploration',
  '#RenewableEnergy',
  '#GlobalPolitics',
  '#EnvironmentalIssues',
  '#EconomicTrends',
  '#FilmIndustry',
  '#MusicTrends',
  '#CulturalEvents',
  // '#FootballMatches',
  // '#AthletePerformances',
  // '#SportsAnalytics',
  // '#GoalSetting',
  // '#CareerAdvice',
  // '#HealthAndWellness',
  // '#DiversityAndInclusion',
  // '#MentalHealthAwareness',
  // '#EducationReform',
];

const Weekly: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div
      className={cn(
        styles['separator-parent'],
        'flex flex-wrap space-y-2 md:overflow-y-scroll md:sticky md:top-20 md:h-[700px]'
      )}
    >
      <div className={cn(styles['separator-child'])}>
        <h3 className="font-bold mb-3">Top Tags</h3>
        <div className="flex flex-wrap space-y-1 space-x-1">
          {!!isLoading && <BaseTopTagsSkeletons count={tags.length} />}

          {!isLoading &&
            (tags || []).map((item, index) => (
              <Badge key={`tag-${index}`} variant="outline">
                {item}
              </Badge>
            ))}
        </div>
        <div className="fle text-xs my-3">
          <Badge>see more...</Badge>
        </div>
      </div>

      <TopDiscussion className={cn(styles['separator-child'])} />
    </div>
  );
};

export default Weekly;
