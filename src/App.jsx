import { useEffect,useState } from 'react'
import Header from "./components/Header"
import Resultado from "./components/Resultado"

function App() {
  //Hooks - usestates - manipula o resultado da variavel

  const [peso,setPeso] =useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado, setResultado]=useState(0);
  const [mostrarresultado,setMostrarResultado]=useState(false);

  //função calcular IMC
  const calcularIMC=()=>{
    if(peso> 0 && altura> 0){
      const imc = peso/ (altura * altura);
      setResultado(imc)
    }else{
      alert("Insira valores válidos")
    }
  }

   //EFEITO COLATERAL PARA MOSTRAR O RESULTADO
  useEffect(()=>{
    //condicional ternaria , se o resultado for maior que 0 mostra na tela
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false)
    //o efeito só executa quando a variavel resultado for altera
  },[resultado])


  return (
    <section className="container">
    <div className="box">
       <Header/>
       <form>
          <div>
            <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
            <input
              id="altura"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimais)
              placeholder="Digite sua altura"
              onChange={({target})=>setAltura(parseFloat(target.value))}
            />
          </div>

          <div>
            <label htmlFor="peso">Altura<span>(ex: 88kg)</span></label>
            <input
              id="peso"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimais)
              placeholder="Digite seu peso"
              onChange={({target})=>setPeso(parseFloat(target.value))}/>
          </div>
          <button type="button" onClick={calcularIMC}>calcular</button>
       </form>
    </div>
    (mostrarresultado &&(
      resultado resultado=(resultado.tofixed(2))
    ))
    <Resultado/>
    </section>
  )
}
export default App
