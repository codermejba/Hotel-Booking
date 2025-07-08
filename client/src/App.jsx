import {Routes,Route} from 'react-router-dom'

import ContactPage from './components/ContactPage/ContactPage'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import ErrorPage from './components/404 Error Page/ErrorPage'
function App() {

  
  return (
    <>
    <NavigationBar/>
   
    
    

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    
    
    <Footer/>
    </>
  )
}

export default App
