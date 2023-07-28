import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BtnDetails, Image } from '../assets/styles/CardBookStyle';
import 'bootstrap/dist/css/bootstrap.min.css'

export function CardBook(props){
    const api_url = process.env.REACT_APP_API_KEY;
    return(
    <div className='card mx-3'>
        <div className='card-header border-0 text-center bg-transparent'>
            <Image className='rounded' src={`${api_url}${props.img1}`} alt="random image" effect='blur'/>
        </div>
        <div className='card-body text-center'>
            <div className='book-info mb-1'>
                <h6 className='fw-bold'>{props.title}</h6>
                <span className='fw-light text-muted'>{props.author}</span>
            </div>
            <BtnDetails href={`book/${props.id}`} className='btn btn-success rounded-pill mt-2'>Ver detalhes »</BtnDetails>
        </div>
    </div>
    );
}