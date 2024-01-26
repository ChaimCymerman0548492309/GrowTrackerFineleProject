import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #2F8538; /* צבע רקע */
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* הוספת צל */
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
  /* הוספת גבול */
  border-top: 2px solid white;
`;

const Credit = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>© 2024 Grow Tracker. All rights reserved.</div>
      <Credit>Credits to Chaim</Credit>
    </FooterContainer>
  );
};

export default Footer;
