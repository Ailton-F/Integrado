import { Icon, NextButton, PrevButton, Carousel, IndividualCard, CardContainer } from '../assets/styles/BooksCarouselStyle';
import React, { useState, useEffect } from 'react';
import { CardBook } from './CardBook';
import LoadingCircle from '../assets/styles/Loading';

function BooksCarousel(props) {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        if (Array.isArray(props.books)) {
            let cards = props.books.map((book, i) => (
                <CardBook 
                    key={i} 
                    title={book.title} 
                    author={book.author} 
                    id={book.id} 
                    img1={book.img1}
                />
            ));
            setCards(cards);
        }
    }, [props.books]);




    const handlePre = () => {
        document.querySelector('.cards-container').scrollLeft-=300
    };
    const handleNex = () => {
        document.querySelector('.cards-container').scrollLeft+=300
    };

    if(props.loading){return <LoadingCircle/>}

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