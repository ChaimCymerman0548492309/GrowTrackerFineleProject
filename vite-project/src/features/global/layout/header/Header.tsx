import React from 'react';
import styled from 'styled-components';
import { ActionButton, HeaderButtons, HeaderContainer, LogoContainer, LogoImage, LogoutButton, UserInfo } from './Heder.styles';
import { treeImageURL } from '../../pages/home/Home';
import { ParagraphTestComponnet } from '../../styles/StyledParagraph';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onLogoClick: () => void;
  onLogoutClick: () => void;
  onAddGardenClick: () => void;
  onAddUserClick: () => void;
  username: string;
}





const Header = ({username }: HeaderProps) => {
  const nav = useNavigate();

  const handleLogoutClick = () => {
    nav('/AllGardens');
  };

  const handleAddGardenClick = () => {
    nav('/AddGardenPage');
    };

  const ViewUsersClick = () => {
    nav('/AllUsersPage');
    };

  const onAddUserClick = () => {
    nav('/AddUserPage');
  };

  const onLogoutClick = () => {
    nav('/');  };

  return (
    <HeaderContainer>
      <LogoContainer >
        <LogoImage src={treeImageURL} alt="Logo" onClick={handleLogoutClick}/>
        <UserInfo style={{color:'white'}}>Welcome to GrowTracker</UserInfo>
      </LogoContainer>

      <HeaderButtons>
        <UserInfo style={{color:'white'}}>{username}</UserInfo>
        <LogoutButton onClick={onLogoutClick}>LOGOUT</LogoutButton>
        <ActionButton onClick={handleAddGardenClick}>ADD GARDEN</ActionButton>
        <ActionButton onClick={onAddUserClick}>ADD USER</ActionButton>
        <ActionButton onClick={ViewUsersClick}>VIEW ALL USERS</ActionButton>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
