import { Card, CardHeader, Heading, CardBody } from '@chakra-ui/react';
import { texts } from '../../../constants/texts';
import { View, useViewContext } from '../dashboard';
import ResearchList from './research-list';
import ArticlesList from './articles-list/articles-list';

type DisplayViewType = {
  [k in Exclude<View, 'Dashboard'>]: { title: string; component: JSX.Element };
};

const DetailedListPage = () => {
  const { currentView } = useViewContext();

  const displayView: DisplayViewType = {
    [View.DetailedList]: {
      title: texts.generalResearchList,
      component: <ResearchList />,
    },
    [View.ArticlesList]: { title: '', component: <ArticlesList /> },
  };

  return (
    <section>
      <Card width='100%' height='100%' marginLeft='24px'>
        <CardHeader textAlign='center'>
          <Heading size='md'>{texts.generalResearchList}</Heading>
        </CardHeader>

        <CardBody overflow='auto'>
          {displayView[currentView as keyof DisplayViewType].component}
        </CardBody>
      </Card>
    </section>
  );
};

export default DetailedListPage;
