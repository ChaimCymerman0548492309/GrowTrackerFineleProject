import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TytleContainer } from '../../styles/Divs';
import ButtonStyled from '../../styles/ButtonStyled';
import { CustomTitle } from '../../styles/CustomTitle';
import { CenteredDiv, InputField, LoginForm, StyledImage } from './Home.style';
export const treeImageURL = 'https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg';

function Home() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const onSubmit = (data : any ) => {
    console.log(data);
    
    // Perform validation, send data to server, etc.
    // For simplicity, let's assume validation is successful.

    // Navigate to 'AllGardens' page after successful login
    nav('/AllGardens');
  };

  return (
    <CenteredDiv>
      <StyledImage src={treeImageURL} alt="GrowTracker Logo" />
      <TytleContainer>
        <CustomTitle data-testid="cy-tytle">
          Welcome to the GrowTracker app
        </CustomTitle>
      </TytleContainer>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <InputField
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <ButtonStyled data-testid="cy-Button" type="submit">
        Click me to continue... :)

        </ButtonStyled>
      </LoginForm>
    </CenteredDiv>
  );
}

export default Home;
