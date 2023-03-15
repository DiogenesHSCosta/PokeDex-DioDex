import "./Cards.css"

export function Cards(props){
    const classe = `cards ${props.className} `
    return(
            <div key={props.id}
                 className={classe}
                 onClick={props.onClick}
            >   
                <div className="card-container">
                    <img src={props.src} alt={props.nome} />
                    <p> {props.nome}</p>
                </div>
                <p># {props.id} </p>
            </div>
    )
}