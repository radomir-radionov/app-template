import { Outlet } from 'react-router-dom';

import { LayoutHomeStyled } from './styles';

const LayoutHome = () => {
  return (
    <LayoutHomeStyled>
      <Outlet />
    </LayoutHomeStyled>
  );
};

export default LayoutHome;
