import { CreateToastFnReturn, useToast } from '@chakra-ui/react';
import { FC, HTMLAttributes, createContext, useContext } from 'react';

interface GlobalToastContextProps {
  toast: CreateToastFnReturn;
}

const GlobalToastContext = createContext<GlobalToastContextProps | undefined>(
  undefined
);

export const useGlobalToastContext = () => {
  const context = useContext(GlobalToastContext);
  if (!context) {
    throw new Error(
      'useGlobalToastContext must be used under GlobalToast component.'
    );
  }

  return context;
};

const GlobalToast: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const toast = useToast({ position: 'top', duration: 3000 });

  return (
    <GlobalToastContext.Provider value={{ toast }}>
      {children}
    </GlobalToastContext.Provider>
  );
};
export default GlobalToast;
