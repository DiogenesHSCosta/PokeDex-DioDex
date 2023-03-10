import "./Caixa.css"

export function Caixa(props){

    return(
    <button className="caixa" onClick={props.evento}>
        <p>{props.texto}</p>
    </button>
    )
    
}