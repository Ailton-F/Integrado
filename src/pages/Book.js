import Header from '../components/Header';
import Footer from '../components/Footer';
import {BlockTest, BuyBtn, SmallBlock } from '../assets/styles/BookStyle';

export function Book(props){
    return(
        <div>
            <Header shadow={true}/>
            <div className='container'>
                <h2>O cortiço</h2>
                <h4>Por Aluísio de Azevedo</h4>

                <div id="book-imgs" className="row d-flex">
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
                <div id="book-btns" className="row gap-4">
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="$ Comprar"/>
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="<3 Adicionar à lista"/>
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="Chat"/>
                </div>

                <div id="book-detail">
                    <h4>Detalhes do livro</h4>
                    <h4>Descrição</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus non arcu pellentesque malesuada ac et mauris. Proin maximus ante suscipit ex luctus elementum vitae sed lorem. Nam eu volutpat tellus, ut gravida augue. Pellentesque et est vestibulum, interdum eros ac, dapibus ex.</p>
                    <h4>Categoria</h4>
                    <a>Romance</a>, <a>ficção</a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};