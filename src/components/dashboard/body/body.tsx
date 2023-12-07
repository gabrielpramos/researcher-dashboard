import './body.scss';
import ArticleYearlyBarchart from './article-yearly-barchart/article-yearly-barchart';
import ResearchersRankChart from './researchers-rank-chart/researchers-rank-chart';
import TitlesRankChart from './titles-rank-chart/titles-rank-chart';
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
      </section>

      <section className='chart-section'>
        <ArticleYearlyBarchart />
      </section>
    </div>
  );
};

export default Body;
