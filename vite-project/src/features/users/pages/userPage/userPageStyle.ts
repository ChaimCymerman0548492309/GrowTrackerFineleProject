import styled, { keyframes } from "styled-components";

export const UserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
  color: #2F8538; /* Dark green color for labels */
`;

export const UserInfoValue = styled.span`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #555; /* Dark gray text color for values */
`;

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #E6F7EA; /* Light green background color */
`;

export const UserInfoContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

export const UserInfoHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* Dark text color for header */
`;

export const EditButton = styled.button`
  background-color: #2F8538; /* Dark green color for Edit button */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #267230; /* Darker green on hover */
  }
`;

export const BackButton = styled.button`
  background-color: #FF6347; /* Tomato color for Back button */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF5733; /* Darker orange on hover */
  }
`;

export const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #555; /* Darker gray text color */
`;


// Declare the keyframes separately
const flowAnimation = keyframes`
  to {
    background-position: 100% 0;
  }
`;

export const ArtBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #ff4e50, #f9d423);
  opacity: 0.8;
  z-index: -1;
  animation: ${flowAnimation} 20s linear infinite alternate;
`;
