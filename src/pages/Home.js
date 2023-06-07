import AccessIcon from '../assets/img/acessibilidade.svg';
import ComIcon from '../assets/img/comunicacao.svg';
import SellIcon from '../assets/img/venda.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BooksCarousel from '../components/BooksCarousel';
import { CategoryCard } from '../components/CategoryCard';
import {
    CarouselControls,
    DivMT4,
    InfoDiv
} from '../assets/styles/HomeStyle';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function Home(){
    const cols = [];
    for(let i = 0; i < 6; i++){
        cols.push(<CategoryCard title="Título" src="https://source.unsplash.com/random/381x180/?img=1" key={i}/>)
    }

    return (
        <div>
            <Header/>
            <div id="items-Carousel" className="carousel slide">
                <CarouselControls className="carousel-indicators">
                    <button className="active" type="button" data-bs-target="#items-Carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#items-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#items-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </CarouselControls>
                
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

                <button className="carousel-control-prev" type="button" data-bs-target="#items-Carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#items-Carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>

                <DivMT4>
                    <h2 className='m-0'>Adicionados recentemente</h2>
                </DivMT4>

                <BooksCarousel />
            </div>
            
            <div className='categories container mt-5'>
                <hr/>
                <div>
                    <h2>Explore categorias de livros</h2>

                    <DivMT4 className="row justify-content-between">
                        {cols}
                    </DivMT4>
                </div>
            </div>
            <div className='container'>
                <hr/>
                <DivMT4 className="info-container">
                    <h2>Sobre o projeto</h2>
                    <InfoDiv className='row'>
                        <div className='col-12 col-md-4 text-center'>
                            <img src={AccessIcon} alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Acessibilidade</h4>
                            <p className='px-5'>Livros a preços mais acessíveis que cabem no seu bolso.</p>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <img src={ComIcon} alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Entrega Facilitada</h4>
                            <p className='px-5'>Entrega dos livros combinada com o vendedor para ser mais prática.</p>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <img src={SellIcon} alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Venda rápida</h4>
                            <p className='px-5'>Você pode vender seus livros rapidamente com o site.</p>
                        </div>
                    </InfoDiv>
                </DivMT4>
            </div>
            <Footer />
        </div>
    )
}

export default Home;