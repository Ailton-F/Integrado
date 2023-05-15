import HeaderLogo from '../assets/img/HeaderLogo.svg';
import '../assets/css/Header.css';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-transparent container">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img src={HeaderLogo} alt='Livresse Logo'/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                    <form className="d-flex search-bar rounded-pill">
                        <input className="form-control rounded-pill input-search py-1 px-5" type="search" placeholder="Buscar" aria-label="Search"/>
                        
                        <button className="btn btn-search rounded-pill" type="submit">
                            <i class="ri-search-line"></i>
                        </button>
                    </form>

                    <ul className="navbar-nav gap-4 mb-2 mb-lg-0">
                       
                        <li className="nav-item">
                            <a className="nav-link fw-medium text-black px-0 py-2" href="#">Lista de desejos</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link fw-medium btn btn-login rounded-pill px-5">Entrar</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link fw-medium btn btn-register rounded-pill text-white px-4" href="#">Cadastre-se</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;