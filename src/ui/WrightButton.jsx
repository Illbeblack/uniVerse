import styled, { css } from 'styled-components';

const WrightButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-grey-500);
  background-color: var(--color-main-500);
  border-radius: 0 1rem 1rem 0;

  position: fixed;
  z-index: 3;
  top: var(--stickTop);
  width: 4rem;
  height: 4rem;
  padding: 0.3rem;

  cursor: pointer;
  transition: left 0.4s;

  ${(props) =>
    !props.active &&
    css`
      left: 15.8rem;
      box-shadow: var(--shadow-md);
      &:hover {
        left: 15.9rem;
      }
    `}

  ${(props) =>
    props.active &&
    css`
      left: 43.5rem;
      width: 2rem;
      &:hover svg {
        transition: ease-in-out 0.6s;
        transform: rotate(760deg);
      }
    `}
  & svg {
    width: 1.6rem;
    height: 1.6rem;
    transition: all 0.2s;
  }
`;

export default WrightButton;
