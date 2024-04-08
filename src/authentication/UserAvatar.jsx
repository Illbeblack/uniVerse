import styled from 'styled-components';
// import { useUser } from './useUser';

const StyledUserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: var(--font-size-lg);
  font-family: var(--font-family-cav);
  color: var(--color-grey-500);
`;

const Avatar = styled.img`
  display: block;
  width: 4.8rem;
  width: 4.4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-main-500);
`;

function UserAvatar() {
  //   const { user } = useUser();
  //   const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      {/* <Avatar
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span> */}

      <Avatar src="default-user.jpg" alt={`Avatar of fullName`} />
      <span>#NewUser</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
