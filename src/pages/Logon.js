import { useContext } from 'react';
import '../assets/css/Logon.css';
import Logo from '../assets/img/Logo.svg';
import { logIn, cad } from '../services/UserService';


function Logon(){
    return(
        <div className="cad-container d-flex justify-content-center align-items-center vh-100">
            <div className="card border-0 shadow-lg flex-grow-1">
                <div className="card-header text-center bg-transparent border-0">
                    <img className="align-self-center" src={ Logo } alt="Random image"/>
                    <h4 className="card-title mt-5">Entre em sua conta</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={ logIn }>
                        <label className="form-label" for="email">E-mail</label>
                        <div className="form-group">
                            <input className="form-control" name="email" type="email" required/>
                        </div>
                        <label className="form-label mt-2" for="password">Senha</label>

                        <div className="form-group d-flex align-items-center">
                            <input className="form-control pass" name="password" type="password" required/>
                            <div className="icon input-group-text bg-transparent">
                                <i className="ri-eye-line"></i>
                            </div>
                        </div>

                        <p className="text-end my-4 forgot"><a className="text-decoration-none">Esqueceu sua senha?</a></p>
                        <input className="sbmt-btn form-control text-white" type="submit"value="Entrar"/>
                    </form>
                    <p className="text-center mt-5 pb-3">Não possui conta? <a className="fw-bold text-decoration-none">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}

function Cad(){
    return(
        <div className="cad-container d-flex justify-content-center align-items-center vh-100">
            <div className="card border-0 shadow-lg flex-grow-1">
                <div className="card-header text-center bg-transparent border-0">
                    <img className="align-self-center" src={ Logo } alt="Random image"/>
                    <h4 className="card-title mt-5">Crie sua conta</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={ cad }>
                        
                        <label className="form-label" for="name">Nome de identificação</label>
                        <div className="form-group">
                            <input className="form-control" name="name" type="text" required/>
                        </div>

                        <label className="form-label mt-2" for="email">E-mail</label>
                        <div className="form-group">
                            <input className="form-control" name="email" type="email" required/>
                        </div>
                        
                        <label className="form-label mt-2" for="password">Senha</label>
                        <div className="form-group d-flex align-items-center">
                            <input className="form-control pass" name="password" type="password" required/>
                            <div className="icon input-group-text bg-transparent">
                                <i className="ri-eye-line"></i>
                            </div>
                        </div>

                        <input className="sbmt-btn form-control text-white my-4" type="submit" value="Cadastrar"/>
                    </form>
                    <p className="text-center mt-5 pb-3">Já possuí conta? <a className="fw-bold text-decoration-none">Entrar</a></p>
                </div>
            </div>
        </div>
    )
}

export {Logon, Cad};