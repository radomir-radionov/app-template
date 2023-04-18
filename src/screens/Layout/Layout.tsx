import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { LayoutStyled } from './styles';

const Layout = () => {
  return (
    <LayoutStyled>
      <header>1</header>
      <Outlet />
      <footer>2</footer>
    </LayoutStyled>
  );
};

export default Layout;
