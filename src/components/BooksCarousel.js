import React, { useState } from 'react';
import { CardBook } from './CardBook';
import '../assets/css/BooksCarousel.css';

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
        <div className="books-carousel ms-md-5">
            <div className='d-flex cards-container transition' style={{ 'left': scroll }}>
                {cards.map((card, index) => (
                    <div className='card-individual' key={index}>
                        { card }
                    </div>
                ))}
            </div>
            <button className='nex control btn shadow-lg' onClick={handleNex} disabled={scroll === -4500 }><i className="ri-arrow-right-s-line"></i></button>
             
            <button className='pre control btn shadow-lg' onClick={handlePre} disabled={scroll === 0}><i className="ri-arrow-left-s-line"></i></button>
        </div>
    );
}

export default BooksCarousel;