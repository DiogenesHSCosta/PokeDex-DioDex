import "./Cards.css"

export function Cards(props){


    return( 

        <li className='lista-pokemons' key={props.id}>  
            <div key={props.id}
                 className="cards"
                 onClick={props.onClick}
            >   
                <div className="card-container">
                    <img src={props.src} alt={props.nome} />
                    <p> {props.nome}</p>
                </div>
                <p>#{props.id} </p>
                
            </div>
        </li>
    )
}