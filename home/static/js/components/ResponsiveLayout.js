import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return React.Children.map(children, child =>
    React.cloneElement(child, { isMobile, isTablet })
  );
};

export default ResponsiveLayout;