import { ContextoProvider } from '../Contexto/Contexto'
import NavBar from '../NavBar/NavBar'


const Layout = ({children}) => {

    return (
        <ContextoProvider>
            <div>
                <NavBar/>
                <>{children}</>
            </div>
        </ContextoProvider>
    )
}

export default Layout
