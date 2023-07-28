import Header from '../components/Header';
import Footer from '../components/Footer';
import { addBook } from '../services/BookService';
import LoadingCircle from '../assets/styles/Loading';
import {Card, FileIcon, FileInput, SbmtBtn, TextMuted, TinyText, Title} from '../assets/styles/AddBookStyle';

import { AuthContext } from '../context/auth';
import { useContext } from 'react';

export function AddBook(props){

    const { authenticated, loading} = useContext(AuthContext);
    
    if(loading){return <LoadingCircle/>}
    if(!authenticated){window.location = '/login'};

    const HandleSubmit = async (e) => {
        e.preventDefault();
        
        const title = e.target.title.value;
        const author = e.target.author.value;
        const price = Number(e.target.price.value);
        const desc = e.target.desc.value;
        const files = e.target.formFile.files;
        const body = new FormData();

        body.append('title', title);
        body.append('author', author);
        body.append('description', desc);
        body.append('price', price);
        body.append(`img1`, files[0])
        body.append(`img2`, files[1])
        body.append(`img3`, files[2])
        body.append(`img4`, files[3])


        console.log(...body)

        try {
          const post = await addBook(body);
          console.log(post);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div>
            <Header shadow={true}/>
            <div className='container'>
                <Title className='fw-bold'>Anunciar livro</Title>
                <Card className='card border-0 shadow-lg'>
                    <form onSubmit={HandleSubmit} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="book-title" className="form-label">Título do livro</label>
                            <input type="text" className="form-control" name="title"/>
                        </div>
                        {/* <div className="mb-4">
                            <label htmlFor="category" className="form-label">Categoria</label>
                            <select className="form-select" name="category" aria-label="Selecione a categoria">
                                <option selected disabled>Selecione a categoria</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="book-author" className="form-label">Escritor</label>
                            <input type="text" className="form-control" name="author"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="book-price" className="form-label">Preço</label>
                            <input type="number" className="form-control" name="price"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="desc" className="form-label">Descrição</label>
                            <textarea className="form-control" id="desc" name="desc" rows="5" placeholder='Ex: Bom estado, impresso em 2001...'></textarea>
                        </div>

                        <div className="mb-4">
                            <p>Fotos <TextMuted>(até 4 fotos)</TextMuted></p>

                            <FileInput htmlFor="formFile" className="form-label rounded text-center">
                                <FileIcon className='ri-image-add-line'></FileIcon>
                                <p className='fw-bold m-0'>Adicionar fotos</p>
                                <TinyText>Apenas em JPG e PNG</TinyText>
                            </FileInput>

                            <input className="d-none form-control" type="file" id="formFile" name="formFile" multiple/>
                        </div>

                        <SbmtBtn className="text-white px-5 py-2" type="submit" value="Enviar"/>
                    </form>
                </Card>
            </div>
            <Footer />
        </div>
    );
}