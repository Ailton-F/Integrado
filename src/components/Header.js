import HeaderLogo from '../assets/img/HeaderLogo.svg';
import {
    BtnSearch,
    BtnRegister,
    BtnLogin,
    InputSearch,
    SearchBar,
    BrandIcon
} from '../assets/styles/HeaderStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContext } from '../context/auth';
import { useContext } from 'react';
import jwt from "jwt-decode";

function Header(props){
    const { authenticated, userData } = useContext(AuthContext);
    console.log(authenticated)
    function NavList() {

        if(!authenticated){
            return(
            <ul className="navbar-nav gap-4 ms-md-5 mb-2 mb-lg-0">
                            
                <li className="nav-item">
                    <a className="nav-link fw-medium text-black px-0 py-2" href="#">Lista de desejos</a>
                </li>
    
                <li className="nav-item dropdown">
                    <BtnLogin href="/login" className="nav-link fw-medium btn btn-login rounded-pill px-5">Entrar</BtnLogin>
                </li>
    
                <li className="nav-item">
                    <BtnRegister className="nav-link fw-medium btn btn-register rounded-pill text-white px-4" href="/register">Cadastre-se</BtnRegister>
                </li>
    
            </ul>
            )
        } else {
            return(
            <ul className="navbar-nav gap-4 ms-md-5 mb-2 mb-lg-0">
                            
                <li className="nav-item">
                    <a className="nav-link fw-medium text-black px-0 py-2" href="#">Olá, {userData.name}</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link fw-medium text-black px-0 py-2" href="#">Lista de desejos</a>
                </li>
    
                <li className="nav-item dropdown">
                    <BtnLogin className="nav-link dropdown-toggle fw-medium btn btn-login rounded-pill px-4" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Meu perfil</BtnLogin>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li className='border-bottom d-flex align-items-center px-4'>
                            <i className="ri-user-line"></i><a className="dropdown-item" href="/edit-user">Minha conta</a>
                        </li>

                        <li className='border-bottom d-flex align-items-center px-4'>
                            <i className="ri-coins-line"></i><a className="dropdown-item" href="#">Minhas vendas</a>
                        </li>

                        <li className='border-bottom d-flex align-items-center px-4'>
                            <i className="ri-shopping-bag-2-line"></i><a className="dropdown-item" href="#">Minhas compras</a>
                        </li>

                        <li className='border-bottom d-flex align-items-center px-4'>
                            <i className="ri-notification-4-line"></i><a className="dropdown-item" href="#">Notificações</a>
                        </li>

                        <li className='border-bottom d-flex align-items-center px-4'>
                            <i className="ri-chat-3-line"></i><a className="dropdown-item" href="#">Minhas vendas</a>
                        </li>

                        <li className='d-flex align-items-center px-4'>
                            <i className="ri-logout-box-r-line"></i><a className="dropdown-item" href="#">Sair</a>
                        </li>

                    </ul>
        
                </li>

                <li className="nav-item">
                    <BtnRegister className="nav-link fw-medium btn btn-register rounded-pill text-white px-4" href="/add-book">Vender</BtnRegister>
                </li>
    
            </ul>
            )
        }
    }

    return(
        <nav className={'navbar navbar-expand-lg bg-transparent ' + (props.shadow ? 'shadow-lg':'')}>
            <div className="container">

                <BrandIcon className="navbar-brand" href="/">
                    <img src={HeaderLogo} alt='Livresse Logo'/>
                </BrandIcon>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                    <SearchBar className="d-flex search-bar rounded-pill flex-grow-1 me-md-5">
                        <InputSearch className="form-control rounded-pill py-1 px-5" type="search" placeholder="Buscar" aria-label="Search"/>
                        
                        <BtnSearch className="btn btn-search rounded-pill" type="submit">
                            <i className="ri-search-line"></i>
                        </BtnSearch>
                    </SearchBar>

                    <NavList/>

                </div>
            </div>
        </nav>
    )
}

export default Header;