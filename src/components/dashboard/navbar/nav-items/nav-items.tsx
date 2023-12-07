import { Button, Flex, Icon } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import { View, useViewContext } from '../../dashboard';
import { GoPlusCircle } from 'react-icons/go';
import { CiViewTable } from 'react-icons/ci';
import { IoMdPaper } from 'react-icons/io';
import Logo from '../../../../assets/cesar-school-logo.png';
import { Modals, useModalContext } from '../../modals-wrapper/modals-wrapper';

const NavItems = () => {
  const { updateModal } = useModalContext();
  const { updateView } = useViewContext();

  return (
    <div className='nav-items'>
      <div className='home-logo'>
        <img
          src={Logo}
          loading='eager'
          alt={texts.logoAlt}
          onClick={() => {
            updateView(View.Dashboard);
          }}
        />
      </div>

      <Flex gap='8px' flexFlow='column'>
        <Button
          leftIcon={<Icon as={GoPlusCircle} />}
          backgroundColor='#f8741b'
          _hover={{ backgroundColor: '#ff6002' }}
          color='white'
          variant='ghost'
          type='button'
          onClick={() => {
            updateModal(Modals.AddPublish);
          }}
        >
          {texts.addPublish}
        </Button>

        <Button
          variant='ghost'
          type='button'
          leftIcon={<Icon as={CiViewTable} />}
          onClick={() => {
            updateView(View.DetailedList);
          }}
        >
          {texts.totalOfResearches}
        </Button>

        <Button
          variant='ghost'
          type='button'
          leftIcon={<Icon as={IoMdPaper} />}
          onClick={() => {
            updateView(View.ArticlesList);
          }}
        >
          {texts.articles}
        </Button>
      </Flex>
    </div>
  );
};

export default NavItems;
