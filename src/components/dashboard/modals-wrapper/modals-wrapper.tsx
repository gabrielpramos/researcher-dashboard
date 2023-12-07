import { FC, HTMLAttributes, createContext, useContext, useState } from 'react';
import FirstSignInModal from '../first-signin-modal/first-signin-modal';
import AddPublishModal from './add-publish-modal/add-publish-modal';

export enum Modals {
  None = 'None',
  FirstSignIn = 'FirstSignIn',
  AddPublish = 'AddPublish',
}

interface ModalContextProps {
  activeModal: Modals;
  updateModal: (modal: Modals) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      'The Modal Context must be called within the ModalsWrapper component.'
    );
  }

  return context;
};

const ModalsWrapper: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<Modals>(Modals.None);

  const firstInteration =
    localStorage.getItem('verifiedAccount') !== 'verified';
  const updateModal = (newActiveModal: Modals) => {
    setActiveModal(newActiveModal);
  };

  return (
    <ModalContext.Provider value={{ activeModal, updateModal }}>
      {firstInteration && <FirstSignInModal />}

      {activeModal === Modals.AddPublish && <AddPublishModal />}

      {children}
    </ModalContext.Provider>
  );
};

export default ModalsWrapper;
