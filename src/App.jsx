
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage'
function App() {

  
  return (
    <>
    <Header/>
   
    
    

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Routes>
    
    
    <Footer/>
    </>
  )
}

export default App
