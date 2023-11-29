import { signInWithPopup } from 'firebase/auth';
import './login-button.scss';
import { auth, provider } from '../../../firebase';
import { texts } from '../../../constants/texts';
import { useAuthContext } from '../auth-wall';
import GoogleLogo from '../../../assets/google-icon.png';
import { useLoadingContext } from '../../loading/global-loading';
import { LocalStorageItems } from '../../../constants/browser';

const LoginButton = () => {
  const { toggleLoading } = useLoadingContext();
  const { updateAuthState } = useAuthContext();
  const onClick = () => {
    toggleLoading(true);

    signInWithPopup(auth, provider).then(({ user }) => {
      const newAuthStatus = { userInfo: user, signedIn: true };
      updateAuthState(newAuthStatus);
      toggleLoading(false);
      localStorage.setItem(
        LocalStorageItems.AuthStatus,
        JSON.stringify(newAuthStatus)
      );
    });
  };

  return (
    <div className='login-button-wrapper'>
      <button type='button' className='login-button' onClick={onClick}>
        <img
          src={GoogleLogo}
          height={42}
          width={42}
          alt={texts.googleLogoAlt}
        />

        {texts.continueWithYourCesarAccount}
      </button>
    </div>
  );
};

export default LoginButton;
