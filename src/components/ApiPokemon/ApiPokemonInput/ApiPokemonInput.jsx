import SearchIcon from '@mui/icons-material/Search';
import { InputNumber, DivSearch, SearchButtom } from './ApiPokemonInputStyled';
import { useState } from 'react';

const ApiPokemonInput = props => {
    const { idpokemonValue } = props;
    const [inputValue, setInputValue]=useState("")

    const idPokemon = e =>{
        e.preventDefault();
        idpokemonValue({
            inputValue
        });
        setInputValue("");
    }
    
    return (
        <DivSearch onSubmit={idPokemon} >
            <InputNumber 
                type="number" placeholder='Id del Pokemon' 
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}/>
            <SearchButtom disabled={inputValue? "" : "disabled"} ><SearchIcon/></SearchButtom>
        </DivSearch>
    )
}

export default ApiPokemonInput
