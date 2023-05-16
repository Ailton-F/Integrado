import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/CardBook.css';

export function CardBook(){
    return(
    <div className='card card-book mx-3'>
        <div className='card-header border-0 text-center bg-transparent'>
            <LazyLoadImage className='rounded' src="https://source.unsplash.com/random/238x342/?img=1" alt="random image" effect='blur'/>
        </div>
        <div className='card-body text-center'>
            <div className='book-info mb-1'>
                <h6 className='fw-bold'>Nome do livro</h6>
                <span className='fw-light text-muted'>Nome do autor</span>
            </div>
            <a href="#" className='btn btn-success rounded-pill mt-2'>Ver detalhes »</a>
        </div>
    </div>
    );
}