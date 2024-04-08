import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineUsers } from 'react-icons/hi2';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlinePortrait } from 'react-icons/md';
import { RxCrumpledPaper, RxBookmark } from 'react-icons/rx';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    color: var(--color-grey-500);
    font-size: var(--font-size-sm);
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.5s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-500);
    border-radius: var(--border-radius-sm);
    transform: translate(1rem);
    text-decoration: underline;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-main-500);
    transition: all 0.5s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    transform: translate(1.1rem);
    color: var(--color-gray-500);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/home">
            <RxBookmark />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/inspiration">
            <HiOutlineLightBulb />
            <span>Inspiration</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/draft">
            <RxCrumpledPaper />
            <span>Draft</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/authors">
            <HiOutlineUsers />
            <span>Authors</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/profile">
            <MdOutlinePortrait />
            <span>Profile</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
