export function CategoryCard(props){
    return (
    <div className="col-4 p-0 text-center">
        <img className="rounded" src={props.src} alt={props.alt}/>
        <h4 className="fw-normal mt-3">{props.title}</h4>
    </div>
    )
}