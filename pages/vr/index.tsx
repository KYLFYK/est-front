import React from 'react';
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer';
import {VRTour} from "../../src/components/containers/ToursContainer/Tours/VRTour/VRTour";

const city = ["Москва", "Крым", "Сочи"];

const Index = () => {
    return (
        <MainContainer
            keywords={"Главная"}
            title={"Главная"}
            city={city}
            footerColor="accent"

        >
            <div style={{height:"80vh",margin:"40px"}}>
                <VRTour url={'https://3d-tur.ru/010/'} />
            </div>

        </MainContainer>
    );
};

export default Index;