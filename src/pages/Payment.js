import Header from '../components/Header';
import Footer from '../components/Footer';
import { miniCard } from '../assets/styles/PaymentStyle';
import { FileIcon, FileInput, TinyText } from '../assets/styles/AddBookStyle';
import { BuyBtn } from '../assets/styles/BookStyle';

export function Payment(props){
    return(
        <div className='d-flex justify-content-center'>
            <miniCard className='card border-0 shadow-lg'>
                <h5>Realizar pagamento</h5>
                <p>Pix de pagamento</p>
                <p className='text-secondary'>(84) 0-0000-0000</p>
                <br/>
                <p>Comprovante de pagamente <p className='text-secondary'>(disponibilize o comprovante para fins de segurança)</p></p>
                <FileInput htmlFor="formFile" className="form-label rounded text-center">
                    <FileIcon className='ri-image-add-line'></FileIcon>
                    <p className='fw-bold m-0'>Adicionar fotos</p>
                    <TinyText>Apenas em JPG e PNG</TinyText>
                </FileInput>
                <div>
                    <BuyBtn className="text-white justify-content-center" type="submit" value="Enviar"/>
                </div>
            </miniCard>
        </div>
    );
};