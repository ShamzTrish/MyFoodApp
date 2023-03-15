
import MenuPage from './pages/MenuPage'
import Error from './pages/Error'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'


const App = () => {

    

    return <> 
           
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/menu-page" element={<MenuPage/>} />
                        <Route path="*" element={<Error/>}/>
                    </Routes>        
             </BrowserRouter>   
    </>
}

export default App