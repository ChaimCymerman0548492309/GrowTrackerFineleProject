import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #4CD164; /* צבע ירוק */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormField = styled.div`
  margin: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #050505; /* צבע כתום */
    font-family: 'Courier New', Courier, monospace;
    font-size: bold; /* הוספת עיצוב מודגש לפונט */
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #e6e6e6; /* צבע אפור בהיר קצת שונה מהרקע */
    margin-top: 5px; /* הפרדה קטנה בין שדות הקלט */
    font-family: 'Arial', sans-serif; /* שינוי גופן ל-Arial */
  }
`;
