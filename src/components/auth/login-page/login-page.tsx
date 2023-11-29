import Logo from '../../../assets/cesar-school-logo.png';
import { texts } from '../../../constants/texts';
import LoginButton from '../login-button/login-button';
import './login-page.scss';

const LoginPage = () => {
  return (
    <article className='auth-wall-wrapper'>
      <div className='auth-wall-canvas'>
        <section>
          <div className='logo'>
            <img
              loading='eager'
              src={Logo}
              alt={texts.logoAlt}
              height={144}
              width={182}
            />
          </div>

          <p className='welcome-text'>{texts.welcomeText}</p>

          <LoginButton />
        </section>
      </div>
    </article>
  );
};

export default LoginPage;
