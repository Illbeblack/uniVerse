import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  height: 3rem;

  background-color: var(--color-main-500);

  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-500);
`;

const LogoText = styled.h1`
  font-size: var(--font-size-lg);
  font-family: var(--font-family-cav);
`;

function Header() {
  return (
    <StyledHeader>
      <LogoText>***uniVerse***</LogoText>
    </StyledHeader>
  );
}

export default Header;
