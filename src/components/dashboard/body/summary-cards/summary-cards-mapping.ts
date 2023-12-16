import {
  DashboardCardsReturn,
  DashboardCarsFunction,
  dashboardCards,
} from '../../../../constants/dashboard-cards';
import { PublishesData } from '../../../../models/types';

type SummaryCardsCalculations = {
  publishTypesObject: { [key: string]: boolean };
  totalOfMainAuthors: number;
  totalOfArticles: number;
};

const COUNT_INCREMENTER = 1;
const ARTICLE_PUBLISH_INDICATOR = 'Artigos';

type SummaryCardsMappingParams = {
  publishesData: PublishesData;
};
type SummaryCardsMappingFunction = (
  params: SummaryCardsMappingParams
) => DashboardCardsReturn;

export const summaryCardsMapping: SummaryCardsMappingFunction = ({
  publishesData,
}) => {
  const summaryCardsCalculations: SummaryCardsCalculations = {
    publishTypesObject: {},
    totalOfMainAuthors: 0,
    totalOfArticles: 0,
  };

  publishesData.forEach(({ type, authorIsOwner }) => {
    if (
      type &&
      type.type
        .toLocaleLowerCase()
        .includes(ARTICLE_PUBLISH_INDICATOR.toLocaleLowerCase())
    ) {
      summaryCardsCalculations.totalOfArticles += COUNT_INCREMENTER;
    }

    if (authorIsOwner) {
      summaryCardsCalculations.totalOfMainAuthors += COUNT_INCREMENTER;
    }

    if (type) {
      summaryCardsCalculations.publishTypesObject[type.id] = true;
    }
  });

  return dashboardCards({
    totalOfPublishes: publishesData.length,
    totalOfArticles: summaryCardsCalculations.totalOfArticles,
    totalOfPublishTypes: Object.values(
      summaryCardsCalculations.publishTypesObject
    ).length,
    totalMainAuthors: summaryCardsCalculations.totalOfMainAuthors,
  });
};
