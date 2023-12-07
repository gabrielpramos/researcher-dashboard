import { texts } from '../../../constants/texts';
import { auth } from '../../../firebase';
import { useAuthContext } from '../../auth/auth-wall';
import NavItems from './nav-items/nav-items';
import './navbar.scss';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const Navbar = () => {
  const {
    userInfo: { photoURL },
    updateAuthState,
  } = useAuthContext();

  return (
    <nav>
      <NavItems />

      <Button
        type='button'
        onClick={() => {
          auth.signOut();
          updateAuthState({ signedIn: false, userInfo: {} });
        }}
      >
        {texts.signOut}
      </Button>

      <div className='user-section'>
        <Menu>
          <MenuButton
            as={Button}
            width='50px'
            height='50px'
            padding='unset'
            borderRadius='50%'
          >
            <img src={photoURL!} alt={texts.profilePhotoAlt} loading='eager' />
          </MenuButton>

          <MenuList>
            <MenuItem
              onClick={() => {
                auth.signOut();
                updateAuthState({ signedIn: false, userInfo: {} });
              }}
            >
              {texts.signOut}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
