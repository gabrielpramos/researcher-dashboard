import { texts } from '../../../constants/texts';
import { useAuthContext } from '../../auth/auth-wall';
import './navbar.scss';
import Logo from '../../../assets/cesar-school-logo.png';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { auth } from '../../../firebase';
import { View, useViewContext } from '../dashboard';

const Navbar = () => {
  const {
    userInfo: { photoURL },
    updateAuthState,
  } = useAuthContext();
  const { updateView } = useViewContext();

  return (
    <nav>
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

        <Button>{texts.totalOfResearches}</Button>
      </div>

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
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
