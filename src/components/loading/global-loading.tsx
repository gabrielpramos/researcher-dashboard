import {
  CircularProgress,
  Modal,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, HTMLAttributes, createContext, useContext, useState } from 'react';

interface LoadingContextProps {
  loading: boolean;
  toggleLoading: (visible: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      'The useLoadingContext must be used inside the App structure'
    );
  }

  return context;
};

const GlobalLoading: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const { onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoading = (visible: boolean) => {
    setLoading(visible);

    if (!visible) {
      onClose();
    }
  };

  return (
    <LoadingContext.Provider value={{ loading, toggleLoading }}>
      <Modal
        closeOnOverlayClick={false}
        onClose={onClose}
        isOpen={loading}
        isCentered
        closeOnEsc={false}
        colorScheme='transparent'
        blockScrollOnMount
      >
        <ModalOverlay
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <CircularProgress isIndeterminate color='orange.300' />
        </ModalOverlay>
      </Modal>

      {children}
    </LoadingContext.Provider>
  );
};

export default GlobalLoading;
