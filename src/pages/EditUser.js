import Header from '../components/Header';
import Footer from '../components/Footer';
import {Title} from '../assets/styles/AddBookStyle';

export function EditUser(props){
    return(
        <div>
            <Header shadow={true}/>
            <div className='container'>
                <Title className='fw-bold'>Minha conta</Title>
                
            </div>
            <Footer/>
        </div>
    );
}