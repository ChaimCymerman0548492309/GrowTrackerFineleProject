import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2F8538; /* Header background color */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border-bottom: 2px solid white;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const RoundedButton = styled.button`
  border-radius: 5px;
`;

export const LogoutButton = styled(RoundedButton)`
  background-color: #FF6347; /* Tomato red color */
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #D32F2F; /* Darker red on hover */
  }
`;

export const ActionButton = styled(RoundedButton)`
  background-color: #3498db; /* Blue color */
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 3px;

  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

export const UserInfo = styled.span`
font-family: 'Carter One', cursive;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 3px;
color: white;
padding: 10px;

`;