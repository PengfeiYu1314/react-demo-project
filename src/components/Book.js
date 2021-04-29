

export default function Book(props) {
    const {src, alt, title, author} = props;
    
    return (
         <article className="card">
            <img src={src} alt={alt}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button type="button" onClick={ () => {
                console.log('show more')
            }
            }>
                Show more 
            </button>
         </article>
    )
}   

