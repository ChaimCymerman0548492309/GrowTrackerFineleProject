import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #25880C; /* צבע ירוק בהיר */
`;

export const LoaderWrapper = styled.div`
  width: 500px; /* גודל ה Loader - ניתן לשנות לפי הצורך */
  height: 500px; /* גודל ה Loader - ניתן לשנות לפי הצורך */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderRing = styled.div`
  width: 100px;
  height: 100px;
  border: 12px solid #3498db;
  border-radius: 50%;
  border-top: 12px solid #ffffff;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: 2rem;
  margin-left: 16px;
  color: #ffffff
  ; /* צבע כחול */
  font-weight: bold;
`;


const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <LoaderRing />
        <LoadingText>Loading Gardens...</LoadingText>
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default Loader;
