function Form(){
    function cadastrarUsuario(e){              //e = evento
        e.preventDefault()                     //interrompe a execução do form e vai executar o que está em seguida. 
        console.log("Cadastrou o usuário!")    //Não envia o form para o servidor e imprime essa linha de código 
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Form
