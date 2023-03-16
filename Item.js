import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )

}

Item.protoType = {
    marca: PropTypes.string.isRequired,           //para indicar que somente string é aceita e que ela precisa ser requirida
    ano_lancamento: PropTypes.number,             //somente number aceito
}

Item.defaultProps = {                             //tipo de um true/false
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}



export default Item