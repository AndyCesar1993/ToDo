import GlobalStyles from './GlobalStyles/GlobalStyles'
import RoutesContainer from './Routes/RoutesContainer'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <GlobalStyles />
            <RoutesContainer />
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
