import Body from './body/body';
import Navbar from './navbar/navbar';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />
      <Body />
    </div>
  );
};

export default Dashboard;
