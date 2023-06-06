import { Icon, NextButton, PrevButton, Carousel, IndividualCard, CardContainer } from '../assets/styles/BooksCarouselStyle';
import React, { useState, useEffect } from 'react';
import { CardBook } from './CardBook';

function BooksCarousel() {
    const cards = [];
    for(let i = 0; i < 10; i++){
        cards.push(<CardBook key={i}/>)
    }

    const handlePre = () => {
        document.querySelector('.cards-container').scrollLeft-=300
    };
    const handleNex = () => {
        document.querySelector('.cards-container').scrollLeft+=300
    };

    return (
        <Carousel>
            <CardContainer className='d-flex transition cards-container'>
                {cards.map((card, index) => (
                    <IndividualCard key={index}>
                        { card }
                    </IndividualCard>
                ))}
            </CardContainer>

            <NextButton pos={{'lg': 95,'md': 90, 'sm': 85}} className='control btn shadow-lg' onClick={handleNex}>
                <Icon className="ri-arrow-right-s-line"></Icon>
            </NextButton>
             
            <PrevButton pos={{'lg': 95,'md': 90, 'sm': 85}} className='control btn shadow-lg' onClick={handlePre}>
                <Icon className="ri-arrow-left-s-line"></Icon>
            </PrevButton>
        </Carousel>
    );
}

export default BooksCarousel;