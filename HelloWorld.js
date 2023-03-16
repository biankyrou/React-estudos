//function é tipo criar um componente (serve para dividir os passos)
import Frase from "./Frase"

function HelloWorld(){
    return (    //aqui dentro entra o HTML
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default HelloWorld
