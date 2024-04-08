import styled from 'styled-components';

import UserAvatar from '../authentication/UserAvatar';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  background-color: var(--color-main-500);
  padding: 3.2rem 0.5rem;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <UserAvatar />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
