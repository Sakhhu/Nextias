import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const PageTransition = ({ children }) => {
  const { darkMode } = useTheme();
  const location = useLocation();

  React.useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div 
      className={`
        animate-in fade-in slide-in-from-bottom duration-300
        ${darkMode ? 'dark' : ''}
      `}
      style={{
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
