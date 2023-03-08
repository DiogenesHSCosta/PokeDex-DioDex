import { useState } from 'react'
import './App.css'
import { Caixa } from './components/Caixa/Caixa.jsx'

function App() {

  return (
    <div className="App">
      <div className="grid-container">

        <section className='container lista'>
        <h1>POKEMONS</h1>

          <ul>
            <li>item 1</li>
          </ul>

        <div className='caixa-container'>
          <Caixa texto="ANTERIOR" />
          <Caixa texto="PROXIMO" />
        </div>
        
        </section>
        
        <section className='container descricao'>
          <p>descricao</p>

          <figure className='descricao-texto'>

          </figure>

          <div className='descricao-texto'>
          
          </div>
        </section>
          
      </div>

    </div>
  )
}

export default App
