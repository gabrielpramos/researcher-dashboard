import { RoutePaths } from './routes';
import { texts } from './texts';

type DashboardCardsParams = {
  totalOfPublishes: number;
  totalOfArticles: number;
  totalOfPublishTypes: number;
  totalMainAuthors: number;
};
export type DashboardCardsReturn = {
  title: string;
  total: number;
  label: string;
  href: string;
  tip: string;
}[];

export type DashboardCarsFunction = (
  params: DashboardCardsParams
) => DashboardCardsReturn;

export const dashboardCards: DashboardCarsFunction = ({
  totalOfPublishes,
  totalOfArticles,
  totalOfPublishTypes,
  totalMainAuthors,
}) => [
  {
    title: texts.totalOfResearches,
    total: totalOfPublishes,
    label: 'Ir para lista de todos os trabalhos',
    href: RoutePaths.AllPublishes,
    tip: 'listar todos os trabalhos do mais recente para o mais antigo, listar quem fez, tipo de publicação, aonde publicou, co autores e quando publicou',
  },
  {
    title: texts.articles,
    total: totalOfArticles,
    label: 'Ir para lista de artigos',
    href: RoutePaths.AllPublishes,
    tip: 'listar os trabalhos do tipo artigo completo ordenados do mais recente para o mais antigo.',
  },
  {
    title: texts.publishType,
    total: totalOfPublishTypes,
    label: 'Ir para lista de tipos de publicação',
    href: RoutePaths.AllPublishes,
    tip: 'listar as temáticas abordadas em ordem alfabética, exibindo: nome, quantidade de artigos, pessoa que publicou mais artigos para a temática',
  },
  {
    title: texts.mainAuthors,
    total: totalMainAuthors,
    label: 'Ir para lista de autores principais',
    href: RoutePaths.AllPublishes,
    tip: 'listar autores principais, quantidade de artigos que a pessoa é autora principal, lugar de submissão do artigo e ano',
  },
];
