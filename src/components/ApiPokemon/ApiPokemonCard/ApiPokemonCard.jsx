import { CardContainer, CardImg, CardH2 } from "./ApiPokemonCardStyle"

const ApiPokemonCard = (props) => {
    const {pokemon} = props
    return (
        <CardContainer>
            <CardImg src={pokemon.sprites.other.home.front_default}/>
            <CardH2>{pokemon.name.toUpperCase()}</CardH2>
        </CardContainer>
    )
}

export default ApiPokemonCard
