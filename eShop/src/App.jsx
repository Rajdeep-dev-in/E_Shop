import Layout from "./components/common/Layout"
import { store } from "./store"
import {Provider} from 'react-redux'


function App(){
  return(
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
        
    </>
  )
}

export default App