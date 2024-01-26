// הוספת Styled Components
import styled from 'styled-components';
import { ParagraphTestComponnet } from '../../../global/styles/StyledParagraph';

// יצירת קומפוננטה ראשית לעמוד
export const PageContainer = styled.div`
  /* הוספת סגנונות כלליים לעמוד */
  background-color: #f5f5f5; /* רקע כללי */
  color: #333; /* צבע טקסט כללי */
  font-family: 'Arial', sans-serif; /* גופן כללי */

  /* הגדרת סגנונות לתכנים בתוך העמוד */
  .garden-details {
    /* סגנונות למידע ספציפי בעמוד */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 20px auto;
    max-width: 800px;
  }

  /* הוספת סגנונות נוספים כפי שתבחר */
`;





// Styled Component לתיאור הטקסט
export const DescriptionText = styled(ParagraphTestComponnet)`
  color: #000; /* צבע טקסט שחור */
  background-color: #00ff00; /* רקע ירוק */
`;

// Styled Component נוסף לטקסט כללי
export const GeneralText = styled(ParagraphTestComponnet)`
  color: #0c0c0c; /* צבע טקסט שחור */
  background-color: #00ff00; /* רקע ירוק */
`;

// תיקון בעיצוב הקיים של CustomTitle
export const CustomTitle = styled.h1<any>`
  /* עיצוב קיים */
  /* ... */
  color: ${({ color }) => color || '#0C2706'}; /* צבע טקסט קיים */
  /* ... */
`;

export const GardenDetailsContainer = styled.div`
  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`;