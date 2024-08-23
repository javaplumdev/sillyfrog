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

const Weekly: React.FC<{ isLoading?: boolean }> = ({ isLoading }) => {
  return (
    <div className={cn(styles['separator-parent'], 'flex flex-wrap space-y-2')}>
      <TopDiscussion className={cn(styles['separator-child'])} />
    </div>
  );
};

export default Weekly;
