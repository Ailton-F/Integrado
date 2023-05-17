import React, { useState } from 'react';
import { CardBook } from './CardBook';
import { Icon, NextButton, PrevButton, Carousel, IndividualCard } from '../assets/styles/BooksCarouselStyle';

function BooksCarousel() {
    const [scroll, setScroll] = useState(0);
    const [hoverOffset, setHoverOffset] = useState(0);

    const cards = [];
    for(let i = 0; i < 15; i++){
        cards.push(<CardBook key={i}/>)
    }

    const handlePre = () => {
        setScroll(scroll + 500);
        console.log(scroll)
    };

    const handleNex = () => {
        setScroll(scroll - 500);
        console.log(scroll)
    };


    return (
        <Carousel className="ms-md-5">
            <div className='d-flex cards-container transition' style={{ 'left': scroll }}>
                {cards.map((card, index) => (
                    <IndividualCard className='card-individual' key={index}>
                        { card }
                    </IndividualCard>
                ))}
            </div>
            <NextButton className='control btn shadow-lg' onClick={handleNex} disabled={scroll === -4500 }><Icon className="ri-arrow-right-s-line"></Icon></NextButton>
             
            <PrevButton className='control btn shadow-lg' onClick={handlePre} disabled={scroll === 0}><Icon className="ri-arrow-left-s-line"></Icon></PrevButton>
        </Carousel>
    );
}

export default BooksCarousel;