import { FC } from 'react';
import LoginPage from '../login-page/login-page';
import Dashboard from '../../dashboard/dashboard';
import { useAuthContext } from '../auth-wall';

const AuthGuard: FC = () => {
  const { signedIn } = useAuthContext();

  if (!signedIn) {
    return <LoginPage />;
  }
  return <Dashboard />;
};

export default AuthGuard;
