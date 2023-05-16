import Footer from '../components/Footer';
import Header from '../components/Header';
import BooksCarousel from '../components/BooksCarousel';
import { CardBook } from '../components/CardBook';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../assets/css/Home.css';

function Home(){
    const rows = []
    for(let i = 0; i < 8; i++){
        rows.push(<CardBook/>)
    }

    return (
        <div>
            <Header />
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/1440x404/?img=1" className="d-block w-100" alt="Imagem aleatória" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1440x404/?img=1" className="d-block w-100" alt="Imagem aleatória" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1440x404/?img=1" className="d-block w-100" alt="Imagem aleatória" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container recent'>
                <h3>Adicionados recentemente</h3>
            </div>

            <BooksCarousel />
            <div className='container categories mt-5'>
                <hr/>
                
            </div>
            <Footer />
        </div>
    )
}

export default Home;