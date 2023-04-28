import { DivStyled, UlStyled, LinkStyled } from "./NavBarStyle";
import Logo from '../assets/logo-CM.png';
import PokeBola from '../assets/pokeball.png'
import HomeIcon from '@mui/icons-material/Home';
import NoTasks from '@mui/icons-material/PlaylistRemove';
import Tasks from '@mui/icons-material/PlaylistAddCheck';
import { useSelector } from "react-redux";
import { getTask } from "../redux/toDoSlice";


const NavBar = () => {
    const tasksTodo = (useSelector(getTask)).payload;

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
