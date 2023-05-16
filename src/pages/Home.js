import Footer from '../components/Footer';
import Header from '../components/Header';
import BooksCarousel from '../components/BooksCarousel';
import { CategoryCard } from '../components/CategoryCard';
import { CardBook } from '../components/CardBook';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../assets/css/Home.css';

function Home(){
    const cols = [];
    for(let i = 0; i < 6; i++){
        cols.push(<CategoryCard title="Título" src="https://source.unsplash.com/random/381x180/?img=1" key={i}/>)
    }

    return (
        <div>
            <Header/>
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
                <h2>Adicionados recentemente</h2>
            </div>

            <BooksCarousel />
            <div className='container categories mt-5'>
                <hr/>
                <div className="categories-container">
                    <h2>Explore categorias de livros</h2>

                    <div className="row categories-row justify-content-between row-gap-3">
                        {cols}
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr/>
                <div className="info-container">
                    <h2>Sobre o projeto</h2>
                    <div className='info row'>
                        <div className='col-4 text-center'>
                            <img className='rounded-circle' src="https://source.unsplash.com/random/140x140/?img=1" alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Livro tal</h4>
                            <p>Ana paula escreve aqui um texto bem bonito paulera sobre o projeto </p>
                        </div>
                        <div className='col-4 text-center'>
                            <img className='rounded-circle' src="https://source.unsplash.com/random/140x140/?img=1" alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Livro tal</h4>
                            <p>Ana paula escreve aqui um texto bem bonito paulera sobre o projeto </p>
                        </div>
                        <div className='col-4 text-center'>
                            <img className='rounded-circle' src="https://source.unsplash.com/random/140x140/?img=1" alt="Imagem aleatória" />
                            <h4 className='info-title mt-4'>Livro tal</h4>
                            <p>Ana paula escreve aqui um texto bem bonito paulera sobre o projeto </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;