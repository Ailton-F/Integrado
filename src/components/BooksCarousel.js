import { Icon, NextButton, PrevButton, Carousel, IndividualCard, CardContainer } from '../assets/styles/BooksCarouselStyle';
import React, { useState, useEffect } from 'react';
import { CardBook } from './CardBook';
import LoadingCircle from '../assets/styles/Loading';

function BooksCarousel() {
    const [books, setBooks] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{

        (async () => {
            try {
                const api = process.env.REACT_APP_API_KEY;
                let req = await fetch(`${api}/api/books/`);
                let recentBooks = await req.json();
                setBooks(recentBooks);
                books.map((book, i)=>{
                    cards.push(<CardBook key={i} title={book.title} author={book.author}/>)
                });
            } catch (error) {
                console.error('Error fetching recent books:', error);
            }
        })();

        setLoading(false);
    },[])

    const handlePre = () => {
        document.querySelector('.cards-container').scrollLeft-=300
    };
    const handleNex = () => {
        document.querySelector('.cards-container').scrollLeft+=300
    };

    if(loading){return <LoadingCircle/>}

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