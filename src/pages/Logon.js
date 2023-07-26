import Logo from '../assets/img/Logo.svg';
import { cad } from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Input, 
    SbmtBtn, 
    Icon, 
    Pass,
    Link,
    Card,
    TinyTxt
} from '../assets/styles/LogonStyle';

import { AuthContext } from '../context/auth';
import { useContext } from 'react';

import { ToastContainer } from 'react-toastify';

function Logon(){
    
    const { authenticated, logIn } = useContext(AuthContext);

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="card border-0 shadow-lg flex-grow-1">
                <div className="card-header text-center bg-transparent border-0">
                    <img className="align-self-center" src={ Logo } alt="Random image"/>
                    <h4 className="card-title mt-5">Entre em sua conta</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={ logIn }>
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <div className="form-group">
                            <Input className="form-control" name="email" type="email" required/>
                        </div>
                        <label className="form-label mt-2" htmlFor="password">Senha</label>

                        <div className="form-group d-flex align-items-center">
                            <Pass className="form-control pass" name="password" type="password" required/>

                            <Icon className="input-group-text bg-transparent">
                                <i className="ri-eye-line"></i>
                            </Icon>
                        </div>

                        <TinyTxt className="text-end my-4 forgot"><Link className="text-decoration-none">Esqueceu sua senha?</Link></TinyTxt>
                        <SbmtBtn className="form-control text-white" type="submit" value="Entrar"/>
                    </form>
                    <p className="text-center mt-5 pb-3">Não possui conta? <Link className="fw-bold text-decoration-none">Cadastre-se</Link></p>
                </div>
            </Card>
            <ToastContainer/>
        </div>
    )
}

function Cad(){
    return(
        <div className="cad-container d-flex justify-content-center align-items-center vh-100">
            <Card className="card border-0 shadow-lg flex-grow-1">
                <div className="card-header text-center bg-transparent border-0">
                    <img className="align-self-center" src={ Logo } alt="Random image"/>
                    <h4 className="card-title mt-5">Crie sua conta</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={ cad }>
                        
                        <label className="form-label" htmlFor="name">Nome de identificação</label>
                        <div className="form-group">
                            <Input className="form-control custom-input" name="name" type="text" required/>
                        </div>

                        <label className="form-label mt-2" htmlFor="email">E-mail</label>
                        <div className="form-group">
                            <Input className="form-control custom-input" name="email" type="email" required/>
                        </div>
                        
                        <label className="form-label mt-2" htmlFor="password">Senha</label>
                        <div className="form-group d-flex align-items-center">
                            <Pass className="form-control pass" name="password" type="password" required/>
                            <Icon className="icon input-group-text bg-transparent">
                                <i className="ri-eye-line"></i>
                            </Icon>
                        </div>

                        <SbmtBtn className="form-control text-white my-4" type="submit" value="Cadastrar"/>
                    </form>
                    <TinyTxt className="text-center mt-5 pb-3">Já possuí conta? <a className="fw-bold text-decoration-none">Entrar</a></TinyTxt>
                </div>
            </Card>
        </div>
    )
}



export {Logon, Cad};