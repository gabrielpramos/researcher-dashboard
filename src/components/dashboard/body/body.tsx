import './body.scss';
import ArticleYearlyBarchart from './charts/article-yearly-barchart/article-yearly-barchart';
import PublishTypePiechart from './charts/publish-type-piechart/publish-type-piechart';
import ResearchersRankChart from './charts/researchers-rank-chart/researchers-rank-chart';
import TitlesRankChart from './charts/titles-rank-chart/titles-rank-chart';
import SummaryCards from './summary-cards/summary-cards';

const Body = () => {
  return (
    <div className='body'>
      <section className='card-section'>
        <SummaryCards />
      </section>

      <section className='chart-section'>
        <ResearchersRankChart />

        <TitlesRankChart />

        <PublishTypePiechart />
      </section>

      <section className='chart-section'>
        <ArticleYearlyBarchart />
      </section>
    </div>
  );
};

export default Body;
