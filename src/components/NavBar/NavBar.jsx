import { DivStyled, UlStyled, LinkStyled } from "./NavBarStyle";
import Logo from '../assets/logo-CM.png';
import PokeBola from '../assets/pokeball.png'
import HomeIcon from '@mui/icons-material/Home';
import NoTasks from '@mui/icons-material/PlaylistRemove';
import Tasks from '@mui/icons-material/PlaylistAddCheck';
import { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";


const NavBar = () => {
    const {tasksTodo} = useContext(Contexto)
    return (
        <DivStyled>
            <img style={{width:'50px'}} src={Logo} alt="" />
            <UlStyled>
                <LinkStyled to="/"><HomeIcon/> Home </LinkStyled>
                <LinkStyled to="todo">
                    {tasksTodo.length? <Tasks/>:<NoTasks/>}
                    ToDo
                </LinkStyled>
                <LinkStyled to="apipokemon">
                    <img style={{width:'25px'}} src={PokeBola}/> 
                    ApiPokemon 
                </LinkStyled>
            </UlStyled>
        </DivStyled>
        
    )
    }

export default NavBar
