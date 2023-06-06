import { Img } from '../assets/styles/CategoryCardStyle'
export function CategoryCard(props){
    return (
    <figure className="col-sm-12 col-md-6 col-lg-4 text-center">    
        <Img imgWidth={{'lg': 22, 'blg': 19}} className="rounded" src={props.src} alt={props.alt}/>
        <h4 className="fw-normal mt-3">{props.title}</h4>
    </figure>
    )
}