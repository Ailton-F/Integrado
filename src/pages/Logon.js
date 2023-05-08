import '../assets/css/Logon.css';

function Logon(){
    return(
        <div class="cad-container d-flex justify-content-center align-items-center vh-100">
            <div class="card border-0 shadow-lg flex-grow-1">
                <div class="card-header text-center bg-transparent border-0">
                    <img class="align-self-center" src="https://source.unsplash.com/random/50x50/?img=1" alt="Random image"/>
                    <h4 class="card-title mt-5">Entre em sua conta</h4>
                </div>
                <div class="card-body">
                    <form class="form">
                        <label class="form-label" form="email">E-mail</label>
                        <div class="form-group">
                            <input class="form-control" name="email" type="email" required/>
                        </div>
                        <label class="form-label mt-2" form="password">Senha</label>

                        <div class="form-group d-flex align-items-center">
                            <input class="form-control pass" name="password" type="password" required/>
                            <div class="icon input-group-text bg-transparent">
                                <i class="ri-eye-line"></i>
                            </div>
                        </div>

                        <p class="text-end my-4 forgot"><a class="text-decoration-none">Esqueceu sua senha?</a></p>
                        <input class="sbmt-btn form-control text-white" type="submit"value="Entrar"/>
                    </form>
                    <p class="text-center mt-5 pb-3">Não possui conta? <a class="fw-bold text-decoration-none">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}

function Cad(){
    return;
}

export {Logon, Cad};