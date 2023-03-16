import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Caixa } from './components/Caixa/Caixa.jsx'
import { Cards } from './components/Cards/Cards.jsx'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [descricao, setDescricao] = useState()
  const [contadorI, setContadorI] = useState(1)
  const [contadorF, setContadorF] = useState(10)

  useEffect(() => {
    getApi();
    
  }, []);

  function getApi(){
    const dados=[]
    
    for(let i=1; i <= 1008 ; i++){
      dados.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    axios.all(dados.map((elemento) => axios.get(elemento))).then((res) => setPokemon(res));

    if(pokemon.length>0){
      setDescricao(pokemon[0].data)
    }
  }

  function showDesc(e){
    console.log(e)
    pokemon.map((element) =>{
      if(element.data.name == e){
        setDescricao(element.data)
      }
    })
    
  }

  function updLista(valI,valF){

    let saveI = valI
    let saveF = valF

    setContadorI(saveI)
    setContadorF(saveF)
    if(pokemon.length>0){
      setDescricao(pokemon[valI-1].data)
    }
  }


 

  return (
    <div className="App" >
      <div className="grid-container">
      
      <section className='lista'>

        
          <ul className='container-lista-pokemon'>
            {pokemon.map((elemento) =>(
              
              elemento.data.id>=contadorI && elemento.data.id<=contadorF &&(
                  <Cards 
                    id={elemento.data.id}
                    nome ={elemento.data.name}
                    onClick= {()=> showDesc(elemento.data.name)}
                    src={elemento.data.sprites.front_default}
                  />
            )
            ))}                  
          </ul>

          {contadorI <=1?(
            <div className='caixa-container'>
              <Caixa texto="PROXIMO" evento ={() => updLista(contadorI+10 ,contadorF+10)}/>
            </div>
          ):(
            <div>
              {contadorF >=1008 ?(
                <Caixa texto="ANTERIOR" evento ={() => updLista(contadorI-10 ,contadorF-10)}/>
              ):(
                <div className="caixa-container">
                  <Caixa texto="ANTERIOR" evento ={() => updLista(contadorI-10 ,contadorF-10)}/>
                  <Caixa texto="PROXIMO" evento ={() => updLista(contadorI+10 ,contadorF+10)}/>
                </div>
                
              )}
              
            </div>
            
          )}
        </section>
        
        <section className='descricao'>
          
          {descricao == null 
          ? (
              <p>Carregando </p>
            )
          :(
            <div className='descricao-container'>

              <p>{descricao.name} #{descricao.id}</p>
              
              <div className={`figure ${descricao.types[0].type.name}`}>
                <figure>
                  {descricao.id<650?(
                    <img
                      id='imagemGif' 
                      src={descricao.sprites.versions["generation-v"]["black-white"].animated.front_default} 
                      alt={`imagem frontal do ${descricao.name}`} 
                    />
                  ):(
                    <img 
                  src={descricao.sprites.front_default} 
                  alt={`imagem frontal do ${descricao.name}`} />
                  )}
                  
                </figure>
              </div>

            
            <div className="descricao-tipo">
              {descricao.types.length == 1 ? (
                <Caixa texto={descricao.types[0].type.name}/>
              )
              :(
                <div>
                  <Caixa texto={descricao.types[0].type.name}/>
                  <Caixa texto={descricao.types[1].type.name}/>
                </div>
              )}
            </div>


            <div className='descricao-status'>
                <ul>
                  <li><p>HP: {descricao.stats[0].base_stat}</p></li>
                  <li><p>ATAQUE: {descricao.stats[1].base_stat}</p></li>
                  <li><p>DEFESA: {descricao.stats[2].base_stat}</p></li>
                  <li><p>ATAQUE ESPECIAL: {descricao.stats[3].base_stat}</p></li>
                  <li><p>DEFESA ESPECIAL: {descricao.stats[4].base_stat}</p></li>
                  <li><p>SPEED: {descricao.stats[5].base_stat}</p></li>
                </ul>
              
            </div>
          </div>
          )}
          
        </section>
          
      </div>

    </div>
  )
}

export default App
