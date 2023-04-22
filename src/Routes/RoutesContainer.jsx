import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import ToDo from '../components/Container/Container'
import { Route,Routes} from 'react-router-dom'
import ApiPokemon from '../components/ApiPokemon/ApiPokemon'


const RoutesContainer = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/todo' element={<ToDo/>}/>
                <Route path='/apipokemon' element={<ApiPokemon/>}/>
            </Routes>            

        </Layout>
    )
}

export default RoutesContainer
