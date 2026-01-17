import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp, logOut, onAuthStateChangedListener, getUserData } from '../firebase/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        
        // Get additional user data from Firestore
        const userDoc = await getUserData(firebaseUser.uid);
        if (userDoc.success) {
          setUserData(userDoc.data);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const result = await signIn(email, password);
      
      if (result.success) {
        navigate('/dashboard');
        return { success: true };
      } else {
        return { success: false, message: result.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  const register = async (email, password, displayName) => {
    try {
      const result = await signUp(email, password, displayName);
      
      if (result.success) {
        navigate('/dashboard');
        return { success: true };
      } else {
        return { success: false, message: result.error };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      await logOut();
      navigate('/');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, message: 'Logout failed' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
