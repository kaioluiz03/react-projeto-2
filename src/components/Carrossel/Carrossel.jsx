import React from "react";
import Carousel from 'react-elastic-carousel';
import { Card } from "../Card/Card";

import image1 from '../../assets/Torre_Paris_shutterstock.jpg'
import image2 from '../../assets/londres-capa2019-05.jpg'
import image3 from '../../assets/hong-kong-9-e1509350635809.jpg'
import image4 from '../../assets/timesSquareNY.jpg'
import image5 from '../../assets/seulSK.jpg'


export default function Carrossel(){

    const breackpoints = [
        {width: 500, itemsToShow: 1},
        {width: 750, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4}
    ]
    return(
        <div className='carrossel'>
            <Carousel breakPoints={breackpoints}>
                <Card cardImage={image1} />
                <Card cardImage={image2} />
                <Card cardImage={image3} />
                <Card cardImage={image4} />
                <Card cardImage={image5} />
            </Carousel>
        </div>
    );
}