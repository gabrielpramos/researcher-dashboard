import GeneralResearchList from './body/general-research-list/general-research-list';
import UserResearchList from './body/user-research-list/user-research-list';

const ResearchList = () => {
  return (
    <>
      <UserResearchList />

      <GeneralResearchList />
    </>
  );
};

export default ResearchList;
