import ApiPokemonCard from "./ApiPokemonCard/ApiPokemonCard"
import ApiPokemonInput from "./ApiPokemonInput/ApiPokemonInput"
import PokeApiTitle from "../assets/titulo.png"
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading/Loading";


const ApiPokemon = () => {
    const searchedPokemon = JSON.parse(localStorage.getItem('pokemon'));
    const [pokemon, setPokemon]= useState(searchedPokemon);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(null)

const idpokemonValue = async(idPokemon) =>{
    setError(null)
    setLoading(true)
    
    try{
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon.inputValue}`)
                setPokemon(localStorage.setItem('pokemon', JSON.stringify(data)))
    }catch(error){
        setError("Ocurrio un error, intente denuevo")
    }finally{
        setLoading(false)
    }
};


    return (
        <>
            <img style={{marginBottom:'15px'}} src={PokeApiTitle}/>
            <ApiPokemonInput idpokemonValue={idpokemonValue} />
                {loading&& <Loading/>}
                {error? <h2 style={{ color: "#F24C4C"}}>{error}</h2>:
                searchedPokemon&& <ApiPokemonCard pokemon={searchedPokemon}/>}                    
        </>
    )
}

export default ApiPokemon
