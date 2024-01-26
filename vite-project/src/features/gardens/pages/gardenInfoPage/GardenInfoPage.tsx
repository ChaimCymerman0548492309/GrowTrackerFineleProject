// import React, { FC } from 'react';
import { CustomTitle } from '../../../global/styles/CustomTitle';
import { StyledLabel, StyledParagraph } from '../../../global/styles/StyledParagraph';
import { Container, LeftDiv, RightDiv, TextContainer, TytleContainer } from '../../../global/styles/Divs';
import { Paragraph } from '../../../global/styles/StyledParagraph';
import Heder_gardenInfoPage from '../../components/body_comp/Heder_gardenInfoPage/Heder_gardenInfoPage';
import { Park } from '../../interfaces/garden_interfise';
import { MapContainer } from '../../../global/styles/MapContainer';
import OpenLayersMap from '../../../global/components/openLayersMap/OpenLayersMap';
import Body_gardenInfoPage from '../../components/body_comp/Body_gardenInfoPage/Body_gardenInfoPage';
import Main_Body_gardenInfoPage from '../../components/body_comp/Main_Body_gardenInfoPage/Main_Body_gardenInfoPage';
import Gallery from '../../components/body_comp/Gallery/Gallery';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Garden } from '../../interfaces/GardensInterFice';
import { useParams } from 'react-router-dom';
import {  GardenDetailsContainer, PageContainer } from './GardenInfoPageStyle';
// import { createContext } from 'react';



const GardenInfoPage = () => {
    // const UserContext = createContext()

    const { id } = useParams();
    console.log(id);

    if (!id) {
        return <div>User ID not provided</div>;
    }
    // console.log(id);

    const [garden, setGardensData] = useState<Garden | undefined>()
    async function getGardens() {

        try {
            const response = await
                axios.get(`http://localhost:4000/garden-rest-api/${id}`);
            if (response) {
                const gardenData =
                    JSON.parse(response.request.responseText);
                setGardensData(gardenData)
                console.log(gardenData);
            } else {
                console.log('date not comming from server , the arry is empty !');
            }
        } catch (e) {
            console.log(e + 'error connecting to server');
        }
    }
    useEffect(() => {
        getGardens()
    }, []);
    return (
        <>
            <PageContainer>
                <div className="garden-details" style={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    margin: '20px auto',
                    maxWidth: '800px',
                }}>

                    <Heder_gardenInfoPage park_name={garden?.name} />
                    <Body_gardenInfoPage park={garden} />
                    <Main_Body_gardenInfoPage park={garden} />
                    <GardenDetailsContainer>
                    <div className="garden-details">
                        <h3>Images:</h3>
                        {garden?.GardenImg.map((img, index) => (
                            <img key={index} src={img} alt={`Garden Image ${index + 1}`} />
                        ))}

                    </div>
                    </GardenDetailsContainer>
                    <MapContainer>
                        <OpenLayersMap />
                    </MapContainer>
                </div>
            </PageContainer>

        </>





    );
}

export default GardenInfoPage;







// <Container>
//     <LeftDiv>
// <Main_Body_gardenInfoPage park={GardensData} />

//     </LeftDiv>
//     <RightDiv>
//         <Gallery park={park} />
//     </RightDiv>
// </Container>









