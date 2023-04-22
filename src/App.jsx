import  GlobalStyles  from './GlobalStyles/GlobalStyles'
import RoutesContainer from './Routes/RoutesContainer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <RoutesContainer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
