import { RoutePaths } from './routes';
import { texts } from './texts';

export const dashboardCards = [
  {
    title: texts.totalOfResearches,
    total: 30,
    label: 'Ir para lista de todos os trabalhos',
    href: RoutePaths.AllPublishes,
    tip: 'listar todos os trabalhos do mais recente para o mais antigo, listar quem fez, tipo de publicação, aonde publicou, co autores e quando publicou',
  },
  {
    title: texts.articles,
    total: 15,
    label: 'Ir para lista de artigos',
    href: RoutePaths.AllPublishes,
    tip: 'listar os trabalhos do tipo artigo completo ordenados do mais recente para o mais antigo.',
  },
  {
    title: texts.publishType,
    total: 7,
    label: 'Ir para lista de tipos de publicação',
    href: RoutePaths.AllPublishes,
    tip: 'listar as temáticas abordadas em ordem alfabética, exibindo: nome, quantidade de artigos, pessoa que publicou mais artigos para a temática',
  },
  {
    title: texts.mainAuthors,
    total: 21,
    label: 'Ir para lista de autores principais',
    href: RoutePaths.AllPublishes,
    tip: 'listar autores principais, quantidade de artigos que a pessoa é autora principal, lugar de submissão do artigo e ano',
  },
];
