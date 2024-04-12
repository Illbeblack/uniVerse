import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

const StyledWrightForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: var(--color-grey-500);
  background-color: var(--color-main-500);
  box-shadow: var(--shadow-md);
  border-radius: 0 1rem 1rem 0;

  width: 31rem;
  height: 20.1rem;
  padding: 2rem 4rem 0.5rem;

  position: fixed;
  top: var(--stickTop);

  z-index: -2;
  visibility: hidden;

  left: -7rem;
  transition: left 0.4s;
  ${(props) =>
    props.active &&
    css`
      visibility: visible;
      z-index: 1;
      left: 15.8rem;
    `}
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;

  border: 0.1rem solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);

  background-color: var(--color-main-300);
  box-shadow: var(--shadow-sm);
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;

  border: 0.1rem solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);

  background-color: var(--color-main-300);
  box-shadow: var(--shadow-sm);

  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PublishButton = styled.button`
  background-color: var(--color-main-500);
  color: var(--color-grey-500);
  border: none;
  font-size: var(--font-size-sm);
  font-weight: 500;

  &:hover {
    transform: translateX(0.1rem);
    text-decoration: underline;
  }
`;

function WrightForm({ active }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => console.log(data);

  return (
    <StyledWrightForm active={active} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        {...register('title')}
        placeholder="Enter title"
      />
      <Textarea
        id="text"
        {...register('text', {
          required: 'This field is required',
        })}
        placeholder="Start wrighting"
      />
      <ButtonContainer>
        <PublishButton>Publish</PublishButton>
      </ButtonContainer>
    </StyledWrightForm>
  );
}

export default WrightForm;
