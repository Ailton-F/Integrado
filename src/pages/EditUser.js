import Header from '../components/Header';
import Footer from '../components/Footer';
import {Title} from '../assets/styles/AddBookStyle';
import LoadingCircle from '../assets/styles/Loading';
import { Card, SbmtBtn, Form, DeleteBtn} from '../assets/styles/EditUserStyle';

import { useContext } from 'react';
import { AuthContext } from '../context/auth';


export function EditUser(props){
    const { userData, authenticated, loading} = useContext(AuthContext);
    
    if(loading){return <LoadingCircle/>}
    if(!authenticated){window.location = '/login'};

    function handleSubmit(e){
        e.preventDefault();
        
        const api_url = process.env.REACT_APP_API_KEY;
        const user_id = userData.id;
        const token = JSON.parse(window.localStorage.getItem('token'));

        const reqOpt = {
            method: "PUT",
            headers: new Headers({
                "content-type": "application/json",
                "Authorization": `Bearer ${token}` // Inclui o token de autenticação no cabeçalho
            }),
            body: JSON.stringify({
                name: e.target.completeName.value,
                idName: e.target.idName.value
            })
        }

        try{
            fetch(`${api_url}/api/users/${user_id}/`, reqOpt)
        }
        catch(error){
            console.error('Failed to fetch, edit user', error)
        }
    }
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
                        <Form className="mb-5" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label text-muted" htmlFor="completeName">Nome completo</label>
                                <input className="form-control" name="completeName" placeholder={userData.name}/>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label text-muted" htmlFor="idName">Nome de identificação</label>
                                <input className="form-control" name="idName" placeholder={userData.username}/>
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
                                <p className='text-muted'>{userData.email}</p>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label">Senha</label>
                                <p className='text-muted'>Clique aqui para alterar &gt; </p>
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

                <div className='d-flex mt-4'>
                <DeleteBtn className='text-white justify-content-center'>Deletar conta</DeleteBtn>
                </div>

            </div>
            <Footer/>
        </div>
    );
}