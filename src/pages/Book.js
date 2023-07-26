import Header from '../components/Header';
import Footer from '../components/Footer';
import {BlockTest, BuyBtn, SmallBlock } from '../assets/styles/BookStyle';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';

export function Book(props){
    const [book, setBook] = useState([]);
    let {id} = useParams();

    useEffect(()=>{

        const fetchDataBooks = async () => {

            try {
                const api = process.env.REACT_APP_API_KEY;
                let req = await fetch(`${api}/api/books/${id}`);
                let book = await req.json();
                setBook(book);
                console.log(book)

            } catch (error) {
                console.error('Erro ao buscar o livro:', error);
            }
        };

        fetchDataBooks();
    }, []);
    
    return(
        <div>
            <Header shadow={true}/>
            <div className='container mt-4'>
                <h2>{book.title}</h2>
                <h6 className='text-secondary mb-3'>Por {book.author}</h6>

                <div id="book-imgs" className="row d-flex mb-4">
                    <div className="col-8">
                    <BlockTest/>
                    </div>
                    <div className="col-4">
                    <SmallBlock/>
                    <SmallBlock/>
                    <SmallBlock/>
                    </div>
                </div>

                <h2>R$ {book.price}</h2>
                <div id="book-btns" className="d-flex mt-4 mb-1">
                <BuyBtn className="text-white justify-content-center" type="submit" href={`/payment/${book.id}`}>Comprar</BuyBtn>
                <BuyBtn className="text-white justify-content-center" type="submit" href="#">&#9825; Adicionar à lista</BuyBtn>
                <BuyBtn className="text-white justify-content-center" type="submit" href="#">Chat</BuyBtn>
                </div>

                <h4 className='mt-4'>Detalhes do livro</h4>
                <div id="book-detail" className='row d-flex mt-4 gap-5'>
                    <div className='col'>
                        <h4 className='text-secondary'>Descrição</h4>
                        <p>{book.description}</p>
                    </div>
                    <div className='col'>
                    <h4 className='text-secondary'>Categoria</h4>
                        <a>Romance</a>, 
                        <a>ficção</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};