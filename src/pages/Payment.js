import Header from '../components/Header';
import Footer from '../components/Footer';
import { miniCard } from '../assets/styles/PaymentStyle';
import LoadingCircle from '../assets/styles/Loading';
import { FileIcon, FileInput, TinyText } from '../assets/styles/AddBookStyle';
import { BuyBtn } from '../assets/styles/BookStyle';

import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export function Payment(props){
    const { authenticated, loading} = useContext(AuthContext);
    
    if(loading){return <LoadingCircle/>}
    if(!authenticated){window.location = '/login'};

    function handlePayment(){
        window.location="/"
    }

    return(
        <div className='vh-100 d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-center flex-grow-1'>
                <miniCard className='card border-0 shadow-lg p-5'>
                    <h5>Realizar pagamento</h5>
                    <p>Pix de pagamento</p>
                    <p className='text-secondary'>(84) 0-0000-0000</p>
                    <br/>
                    <p>Comprovante de pagamento <p className='text-secondary'>(disponibilize o comprovante para fins de segurança)</p></p>
                    <FileInput htmlFor="formFile" className="form-label rounded text-center">
                        <FileIcon className='ri-image-add-line'></FileIcon>
                        <p className='fw-bold m-0'>Adicionar fotos</p>
                        <TinyText>Apenas em JPG e PNG</TinyText>
                    </FileInput>
                    <div>
                        <BuyBtn className="text-white justify-content-center" type="submit" value="Enviar" onClick={handlePayment}/>
                    </div>
                </miniCard>
            </div>
            <Footer/>
        </div>
    );
};