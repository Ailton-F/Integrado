import Header from '../components/Header';
import Footer from '../components/Footer';
import { BlockTest, BuyBtn } from '../assets/styles/BookStyle';

export function Book(props){
    return(
        <div>
            <Header shadow={true}/>
            <div className='container'>
                <h2>O cortiço</h2>
                <h4>Por Aluísio de Azevedo</h4>
                <BlockTest/>

                <h2>R$ 28,90</h2>
                <div>
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="Comprar"/>
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="Comprar"/>
                <BuyBtn className="form-control text-white d-flex justify-content-center" type="submit" value="Comprar"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};