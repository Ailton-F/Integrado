import Header from '../components/Header';
import Footer from '../components/Footer';
import {Title} from '../assets/styles/AddBookStyle';
import { Card, SbmtBtn, Form} from '../assets/styles/EditUserStyle';


export function EditUser(props){
    return(
        <div>
            <Header shadow={true}/>
            <div className='container d-flex flex-column'>
                <Title className='fw-bold'>Minha conta</Title>

                <Card className='card shadow p-0 flex-grow-1 border-0'>
                    <div className='card-header bg-transparent text-center p-0 mt-4'>
                        <h4 className="mb-3">Seus Dados</h4>
                    </div>
                    <div className='card-body mt-4'>
                        <Form className="mb-5">
                            <div className="form-group">
                                <label className="form-label text-muted" htmlFor="completeName">Nome completo</label>
                                <input className="form-control" name="completeName"/>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label text-muted" htmlFor="idName">Nome de identificação</label>
                                <input className="form-control" name="idName"/>
                            </div>
                            <SbmtBtn className="btn rounded-pill text-white px-4" type='submit'>Salvar edição</SbmtBtn>
                        </Form>
                    </div>
                </Card>

                <Card className='card shadow p-0 flex-grow-1 border-0'>
                    <div className='card-header bg-transparent text-center p-0 mt-4'>
                        <h4 className="mb-3">Dados da conta</h4>
                    </div>
                    <div className='card-body mt-4'>
                        <Form className="mb-5">
                            <div className="form-group">
                                <label className="form-label">E-mail</label>
                                <p className='text-muted'>teste@gmail.com</p>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label">Senha</label>
                                <p className='text-muted'>senhaforte123</p>
                            </div>
                        </Form>
                    </div>
                </Card>

                <Card className='card shadow p-0 flex-grow-1 border-0'>
                    <div className='card-header bg-transparent text-center p-0 mt-4'>
                        <h4 className="mb-3">Dados de contato</h4>
                    </div>
                    <div className='card-body mt-4'>
                        <Form className="mb-5">
                            <div className="form-group">
                                <label className="form-label text-muted" htmlFor="tel">Telefone</label>
                                <input className="form-control" name="tel"/>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label text-muted" htmlFor="adress">Endereço</label>
                                <input className="form-control" name="adress"/>
                            </div>
                        </Form>
                    </div>
                </Card>


            </div>
            <Footer/>
        </div>
    );
}