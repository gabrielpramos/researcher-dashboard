import { texts } from '../../../constants/texts';
import { useAuthContext } from '../../auth/auth-wall';
import './navbar.scss';
import Logo from '../../../assets/cesar-school-logo.png';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { auth } from '../../../firebase';

const Navbar = () => {
  const {
    userInfo: { photoURL },
    updateAuthState,
  } = useAuthContext();

  return (
    <nav>
      <div className='home-logo'>
        <a href='/'>
          <img src={Logo} loading='eager' alt={texts.logoAlt} />
        </a>
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
