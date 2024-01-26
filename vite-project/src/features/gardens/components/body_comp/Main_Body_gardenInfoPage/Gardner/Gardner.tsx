import React from 'react';
import styled from 'styled-components';
import { Park } from '../../../../interfaces/garden_interfise';
import { Paragraph, StyledParagraph } from '../../../../../global/styles/StyledParagraph';

interface BodyProps {
  park?: Park;
}

const GardnerContainer = styled.div`
  display: flex;
  flex-grow: 2;
  height: 65%;
`;

const GardnerDetails = styled.div`
  width: 60%;
  flex-grow: 2;
`;

const GardnerImage = styled.div`
  align-items: center;
  justify-items: center;
  flex-grow: 1;
  border-radius: 30%;
  overflow: hidden; /* הוספנו כדי להסתיר חלק מהתמונה וליצור עיגול */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* נשתמש ב-object-fit כדי למלא את התמונה בצורה מושלמת */
    border-radius: 50%; /* יצירת תמונה עגולה */
  }
`;

const Gardner = ({ park }: BodyProps) => {
  return (
    <GardnerContainer>
      <GardnerDetails>
        <StyledParagraph>
          Gardner :{' '}
          <Paragraph component="span" textcolor="black">
            {park?.Gardner.name}
          </Paragraph>
        </StyledParagraph>
        <StyledParagraph>
          Gardner Phone :
          <Paragraph component="p" textcolor="black">
            {park?.Gardner.Phone}
          </Paragraph>
        </StyledParagraph>
        <StyledParagraph>
          Gardner Rating :
          <Paragraph component="span" textcolor="black">
            {park?.Gardner.Rating}
          </Paragraph>
        </StyledParagraph>
      </GardnerDetails>
      <GardnerImage>
        <img src={park?.Gardner.gardner_image} alt={'Gardner.gardner_image'} />
      </GardnerImage>
    </GardnerContainer>
  );
};

export default Gardner;
