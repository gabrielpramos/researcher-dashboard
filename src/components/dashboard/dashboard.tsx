import Body from './body/body';
import Navbar from './navbar/navbar';
import './dashboard.scss';
import FirstSignInModal from './first-signin-modal/first-signin-modal';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />

      <Body />

      <FirstSignInModal />
    </div>
  );
};

export default Dashboard;
