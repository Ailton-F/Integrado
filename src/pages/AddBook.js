import Header from '../components/Header';
import {Card, Title} from '../assets/styles/AddBookStyle';

export function AddBook(props){
    return (
        <div>
            <Header shadow={true}/>
            <div className='container'>
                <Title className='title fw-bold'>Anunciar livro</Title>
                <Card className='card border-0 shadow-lg'>
                    <form>
                        <div class="mb-3">
                            <label for="book-title" class="form-label">Título do livro</label>
                            <input type="text" class="form-control" name="book-title"/>
                        </div>
                        <div class="mb-3">
                            <label for="category" class="form-label">Categoria</label>
                            <select class="form-select" name="category" aria-label="Selecione a categoria">
                                <option selected disabled>Selecione a categoria</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <a className='sbmt-btn'>teste</a>
                    </form>
                </Card>
            </div>
        </div>
    );
}