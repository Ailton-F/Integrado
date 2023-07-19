import Header from '../components/Header';
import Footer from '../components/Footer';
import {BlockTest, BuyBtn, SmallBlock } from '../assets/styles/BookStyle';

export function Book(props){
    return(
        <div>
            <Header shadow={true}/>
            <div className='container mt-4'>
                <h2>O cortiço</h2>
                <h6 className='text-secondary mb-3'>Por Aluísio de Azevedo</h6>

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

                <h2>R$ 28,90</h2>
                <div id="book-btns" className="d-flex mt-4 mb-1">
                <BuyBtn className="text-white justify-content-center" type="submit" value="Comprar"/>
                <BuyBtn className="text-white justify-content-center" type="submit" value="&#9825; Adicionar à lista"/>
                <BuyBtn className="text-white justify-content-center" type="submit" value="Chat"/>
                </div>

                <h4 className='mt-4'>Detalhes do livro</h4>
                <div id="book-detail" className='row d-flex mt-4 gap-5'>
                    <div className='col'>
                        <h4 className='text-secondary'>Descrição</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus non arcu pellentesque malesuada ac et mauris. Proin maximus ante suscipit ex luctus elementum vitae sed lorem. Nam eu volutpat tellus, ut gravida augue. Pellentesque et est vestibulum, interdum eros ac, dapibus ex.</p>
                    </div>
                    <div className='col'>
                    <h4 className='text-secondary'>Categoria</h4>
                    <a>Romance</a>, <a>ficção</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};