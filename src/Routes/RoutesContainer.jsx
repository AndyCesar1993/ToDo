import Layout from '../components/Layout/Layout'
import { Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import ToDo from '../components/Container/ToDo'
import ApiPokemon from '../components/ApiPokemon/ApiPokemon'


const RoutesContainer = () => {
    return (
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element={<Home/>} />
                <Route path='/todo' element={<ToDo/>}/>
                <Route path='/apipokemon' element={<ApiPokemon/>}/>
            </ReactDomRoutes>     
        </Layout>
    )
}

export default RoutesContainer
