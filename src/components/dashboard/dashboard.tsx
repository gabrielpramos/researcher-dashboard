import Body from './body/body';
import Navbar from './navbar/navbar';
import './dashboard.scss';
import FirstSignInModal from './first-signin-modal/first-signin-modal';
import { createContext, useContext, useState } from 'react';
import DetailedListPage from './detailed-list-page/detailed-list-page';

export enum View {
  Dashboard = 'Dashboard',
  DetailedList = 'DetailedList',
  ArticlesList = 'ArticlesList',
}
interface ViewContextProps {
  currentView: View;
  updateView: (newVies: View) => void;
}

const ViewContext = createContext<ViewContextProps | undefined>(undefined);

export const useViewContext = () => {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error('ViewContext must be used inside Dashboard component.');
  }

  return context;
};

const Dashboard = () => {
  const [view, setView] = useState<View>(View.Dashboard);
  const firstInteration =
    localStorage.getItem('verifiedAccount') !== 'verified';

  const updateView = (newView: View) => {
    setView(newView);
  };

  return (
    <ViewContext.Provider value={{ currentView: view, updateView }}>
      <div className='dashboard'>
        <Navbar />

        {view === View.Dashboard ? <Body /> : <DetailedListPage />}

        {firstInteration && <FirstSignInModal />}
      </div>
    </ViewContext.Provider>
  );
};

export default Dashboard;
