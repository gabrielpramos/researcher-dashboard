import { createContext, useContext, useEffect, useState } from 'react';

import LoginPage from './login-page/login-page';
import { User } from '@firebase/auth-types';
import { LocalStorageItems } from '../../constants/browser';
import Dashboard from '../dashboard/dashboard';
import { auth } from '../../firebase';

type StsTokenManager = {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
  isExpired: boolean;
};

type AuthState = {
  signedIn: boolean;
  userInfo: Partial<User & { stsTokenManager: StsTokenManager }>;
};

interface AuthContextProps extends AuthState {
  updateAuthState: (authState: AuthState) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'The useAuthContext hook must be called inside the <AuthContext.Provider>'
    );
  }

  return context;
};

const INITIAL_AUTH_STATE = {
  signedIn: false,
  userInfo: {},
};

const AuthWall = () => {
  const [authState, setAuthState] = useState<AuthState>(INITIAL_AUTH_STATE);

  useEffect(() => {
    const authStateString =
      localStorage.getItem(LocalStorageItems.AuthStatus) ?? '';

    if (authStateString.length > 0) {
      const storedAuthStatus = JSON.parse(authStateString) as AuthState;

      if (
        storedAuthStatus.userInfo?.stsTokenManager?.expirationTime! < Date.now()
      ) {
        setAuthState(INITIAL_AUTH_STATE);
        localStorage.removeItem(LocalStorageItems.AuthStatus);
        auth.signOut();
      } else {
        setAuthState(storedAuthStatus);
      }
    }
  }, []);

  const updateAuthState = (authState: AuthState) => {
    setAuthState(authState);
  };

  return (
    <AuthContext.Provider value={{ ...authState!, updateAuthState }}>
      {authState.signedIn ? <Dashboard /> : <LoginPage />}
    </AuthContext.Provider>
  );
};
export default AuthWall;
