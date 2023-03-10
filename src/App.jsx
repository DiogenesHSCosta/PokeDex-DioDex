import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Caixa } from './components/Caixa/Caixa.jsx'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [descricao, setDescricao] = useState()
  const dados=[]
  let alvo;

  // useEffect(() => {
  //   getApi();
  // }, []);

  async function getApi(){
    for(let i =1; i <= 10; i++){
      dados.push( await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
      console.log(`For rodou ${i} vez(es)`)
    }
    setPokemon(dados)
  }
function teste(){
    console.log(descricao)
    
  }

  function showDesc(e){
    console.log(e.target.innerText)
    pokemon.map((element) =>{
      if(element.data.name == e.target.innerText){
        setDescricao(element.data)
      }
    })
  }

  
  return (
    <div className="App" >
      <div className="grid-container">

        <section className='container lista'>
        <h1>POKEMONS</h1>

          <ul>
            
            {pokemon.map((elemento) =>(
              <li key={elemento.data.id}>
                <p onClick={(e)=> showDesc(e)}>{elemento.data.name}</p>
              </li>
            ))}
          </ul>

        <div className='caixa-container'>
          <Caixa texto="ANTERIOR" evento ={teste}/>
          <Caixa texto="PROXIMO" evento ={getApi}/>
        </div>

        </section>
        
        <section className='container descricao'>
          <p>descricao</p>

          <div className='figure'>
              <figure>
                <img src={descricao.sprites.front_default} alt="" />
              </figure>
          </div>

          {/* <div className="descricao-tipo">
            <Caixa texto={descricao.types[0].type.name}/>
            <Caixa texto={descricao.types[1].type.name}/>
          </div> */}
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
        </section>
          
      </div>

    </div>
  )
}

export default App
