import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

const useModalStartup = (startup?: () => void) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    startup?.();
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isOpen, onClose };
};

export default useModalStartup;
