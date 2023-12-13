import Body from './body/body';
import Navbar from './navbar/navbar';
import './dashboard.scss';
import { createContext, useContext, useState } from 'react';
import DetailedListPage from './detailed-list-page/detailed-list-page';
import ModalsWrapper from './modals-wrapper/modals-wrapper';
import DataWrapper from './data-wrapper/data-wrapper';

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

  const updateView = (newView: View) => {
    setView(newView);
  };

  return (
    <ViewContext.Provider value={{ currentView: view, updateView }}>
      <DataWrapper>
        <ModalsWrapper>
          <div className='dashboard'>
            <Navbar />

            {view === View.Dashboard ? <Body /> : <DetailedListPage />}
          </div>
        </ModalsWrapper>
      </DataWrapper>
    </ViewContext.Provider>
  );
};

export default Dashboard;
